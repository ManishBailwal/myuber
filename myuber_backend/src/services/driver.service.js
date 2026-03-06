
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