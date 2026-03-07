import { createTripService , acceptTripService} from "../services/trip.service.js";

export const createTrip = async (req, res, next) =>{

    try{

        const result = await createTripService(req.user.id, req.body);

        res.status(201).json({
            success: true,
            message:"Trip created Successfully",
            data: result,

        })

    }catch(error){

        next(error);
    }
}

//req.user.id comes from jwt middleware


export const acceptTripController = async (req,res,next)=>{

    try{

        const {tripId} = req.params;
        const driverId = req.user.id;

        const result = await acceptTripService(tripId, driverId);

        res.json({
            success: true,
            message: "Trip accepted Successfully",
            data: result,
        })


    }catch(error){
        next(error);
    }
    
}