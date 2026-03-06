import { driverStatusService, registerDriverService } from "../services/driver.service.js"

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