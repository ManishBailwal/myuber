
import Driver from '../models/Driver.js'
export const registerDriverService = async (userId, data)=>{

    const {vehicleNumber, vehicleType, coordinates} = data;

    //check if driver profile already exists
    const existingDriver = await Driver.findOne({user: userId});

    if(existingDriver){
        const error = new Error("Driver Profile already exists");
        error.statusCode = 400;
        throw error;
    }

    const driver = await Driver.create({

        user: userId,
        vehicleNumber,
        vehicleType,
        currentLocation:{
            type: "Point",
            coordinates,
        }
    })

    return driver;

}

export const driverStatusService = async (userId, status)=>{

    const driver = await Driver.findOneAndUpdate(
        {user: userId},
        {status},
        {new: true},

    )

    if(!driver){

        error = new Error("Driver profile not found");
        error.statusCode = 404;
        throw error;
    }

    return driver;

}

export const driverLocationService = async (userId, coordinates)=>{

    const driver = await Driver.findOneAndUpdate(

        {user:userId},
        {
            currentLocation:{
                type: "Point",
                coordinates,
            }
        },
        {new: true}

    )

    if(!driver){
        error = new Error("Driver profile not found");
        error.statusCode = 404;
        return error;
    }

    return driver;

}

export const nearbyDriversService = async (lng, lat)=>{

    const drivers = await Driver.find({
        status: "online",
        currentLocation:{
            $near:{
                $geometry:{
                    type:"Point",
                    coordinates:[Number(lng), Number(lat)]
                },
                $maxDistance:5000 //5km
            }

        }
    })

return drivers;

}