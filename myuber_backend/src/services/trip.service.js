
import Trip from '../models/Trip.js'
import Driver from '../models/Driver.js';

export const createTripService = async (riderId, data)=>{

    const {pickupLocation, dropLocation} = data;

    const trip = await Trip.create({
        rider: riderId,
        pickupLocation,
        dropLocation,
        status: "requested"
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

  return trip;


}