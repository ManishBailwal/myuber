import express from "express";
import {authenticate} from '../middlewares/auth.middleware.js'
import {authorize} from '../middlewares/role.middleware.js'
import { arriveTripController, cancelTripController, completeTripController, createTrip, startTripController } from "../controllers/trip.controller.js";
import { acceptTripController } from "../controllers/trip.controller.js";


const router = express.Router();

router.post('/',authenticate, authorize("rider"), createTrip);

router.patch('/:tripId/accept', authenticate, authorize("driver"),acceptTripController)

//trip lifecycle routers
router.patch('/:tripId/arrive', authenticate, authorize("driver"), arriveTripController);
router.patch('/:tripId/start', authenticate, authorize("driver"), startTripController);
router.patch('/:tripId/complete', authenticate, authorize("driver"), completeTripController)
router.patch('/:tripId/cancel', authenticate, cancelTripController)

export default router;