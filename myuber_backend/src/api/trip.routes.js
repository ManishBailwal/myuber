import express from "express";
import {authenticate} from '../middlewares/auth.middleware.js'
import {authorize} from '../middlewares/role.middleware.js'
import { createTrip } from "../controllers/trip.controller.js";


const router = express.Router();

router.post('/',authenticate, authorize("rider"), createTrip);

export default router;