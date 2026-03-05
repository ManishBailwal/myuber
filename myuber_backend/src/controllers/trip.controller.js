import { createTripService } from "../services/trip.service.js";

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