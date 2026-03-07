import { driverLocationService, driverStatusService, nearbyDriversService, registerDriverService } from "../services/driver.service.js"

export const registerDriverController = async (req, res, next) =>{

    try{

    

    const result = await registerDriverService(req.user.id, req.body);

    res.status(201).json({
        success:true,
        message: "Driver Registered Successfully",
        data: result,
    })

}catch(error){
    next(error)
}


}

export const driverStatusController = async (req,res,next)=>{

    try{

        const result = await driverStatusService(req.user.id, req.body.status);

        res.status(201).json({
            success:true,
            message:("Driver Status Updated Successfully"),
            data: result
        })


    }catch(error){
        next(error);
    }


}

export const driverLocationController = async (req, res, next)=>{

    try{

        const result = await driverLocationService(req.user.id, req.body.coordinates);

        res.status(201).json({
            success: true,
            message:"Driver Location Updated",
            data: result,
        })

    }catch(error){
        next(error);
    }



}


export const nearbyDriversController = async (req, res, next)=>{

    try{

        const {lng, lat} = req.query;

        const result = await nearbyDriversService(lng, lat);

        res.json({
            success: true,
            message: " Nearby Drivers Fetched Successfully",
            data: result
        })

    }catch(error){
        next(error);
    }

}