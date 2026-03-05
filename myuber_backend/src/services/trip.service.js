
import Trip from '../models/Trip.js'

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