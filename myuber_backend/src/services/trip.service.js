
import Trip from '../models/Trip.js'
import Driver from '../models/Driver.js';
import { getIo } from '../ws/socket.server.js';
import { getDriverSocket, getRiderSocket } from '../ws/registry/socketRegistry.js';
import { EVENTS } from '../ws/events/events.js';

export const createTripService = async (riderId, data)=>{

    const {pickupLocation, dropLocation} = data;

    const trip = await Trip.create({
        rider: riderId,
        pickupLocation,
        dropLocation,
        status: "requested"
    })


    //find nearby drivers within 5km 
    const drivers = await Driver.find({
      status:"online",
      currentLocation:{
        $near:{
          $geometry:pickupLocation,
          $maxDistance: 5000,
        }
      }
    })

    const io = getIo();

    //notify drivers
     drivers.forEach(driver => {
      const socketId = getDriverSocket(driver.user.toString());

      if(socketId){
        io.to(socketId).emit(EVENTS.TRIP_REQUEST, {
          tripId: trip._id,
          pickupLocation,
          dropLocation
        })
      }
    })

    return trip;

}


export const acceptTripService = async(tripId, driverId)=>{

    //find driver profile 
    const driver = await Driver.findOne({user: driverId});

    if(!driver){
         const error = new Error("Driver profile not found");
    error.statusCode = 404;
    throw error;
    }

    if (driver.status !== "online") {
  const error = new Error("Driver is not available to accept trips");
  error.statusCode = 400;
  throw error;
}

    //atomic update to prevent race condition 
    const trip = await Trip.findOneAndUpdate(
        {_id: tripId,
            status: "requested",
        },
        {
            driver: driver._id,
            status: "accepted",
        },
        {new: true},
    )

    if (!trip) {
    const error = new Error("Trip already accepted by another driver");
    error.statusCode = 400;
    throw error;
  }

  //update driver status
  driver.status = "busy";
  await driver.save();

  const io = getIo();
  const riderSocket = getRiderSocket(trip.rider.toString());
  if(riderSocket){
    io.to(riderSocket).emit(EVENTS.TRIP_ACCEPTED,{
       tripId: trip._id,
  driver: {
    id: driver._id,
    vehicleNumber: driver.vehicleNumber,
    vehicleType: driver.vehicleType
  }
    })
  }


  return trip;


}

export const updateTripStatusService = async(tripId, nextStatus, driverId)=>{

    const trip = await Trip.findById(tripId);

    if(!trip) {
    const error = new Error("Trip not found");
    error.statusCode = 404;
    throw error;
  }


   if (!trip.driver) {
  const error = new Error("Trip has not been assigned to a driver");
  error.statusCode = 400;
  throw error;
}

  // check driver ownership
  if (trip.driver.toString() !== driverId.toString()) {
    const error = new Error("You are not assigned to this trip");
    error.statusCode = 403;
    throw error;
  }


  //validate transition using state machine in Trip model 
  if(!trip.canTransitionTo(nextStatus)){
    const error  = new Error(`Cannot change trip status from ${trip.status} to ${nextStatus}`);
    error.statusCode = 400;
    throw error;
  }

  trip.status = nextStatus;
  await trip.save();

  // if trip finished → free driver
  if (
  (nextStatus === "completed" || nextStatus === "cancelled") && trip.driver ) {
    await Driver.findByIdAndUpdate(trip.driver, {
    status: "online"
  });
}

  return trip;

}