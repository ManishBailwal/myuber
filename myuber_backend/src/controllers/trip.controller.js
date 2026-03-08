import { createTripService , acceptTripService , updateTripStatusService} from "../services/trip.service.js";

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


//Trip LifeCycle Controllers -> arrive -> start -> complete -> cancel

export const arriveTripController = async (req, res, next)=>{

    try{

        const result = await updateTripStatusService(req.params.tripId, "arriving", req.user.id);
        res.json({
      success: true,
      message: "Driver arrived at pickup location",
      data: result
    });

    }catch(error){
        next(error)
    }

}

export const startTripController = async (req, res, next)=>{

    try{

        const result = await updateTripStatusService(req.params.tripId, "ongoing", req.user.id);

        res.json({
      success: true,
      message: "Trip started successfully",
      data: result
    });

    }catch(error){
        next(error)
    }

}

export const completeTripController = async (req, res, next)=>{

    try{

        const result = await updateTripStatusService(
      req.params.tripId,
     
      "completed",
       req.user.id,
    );

    res.json({
      success: true,
      message: "Trip completed successfully",
      data: result
    });

    }catch(error){
        next(error)
    }

}

export const cancelTripController = async (req, res, next)=>{

    try{

        const result = await updateTripStatusService( req.params.tripId, "cancelled", req.user.id,);

    res.json({
      success: true,
      message: "Trip cancelled",
      data: result
    });

    }catch(error){
        next(error)
    }

}
