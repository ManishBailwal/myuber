import express from "express"
const router = express.Router();
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { driverLocationController, nearbyDriversController, registerDriverController } from "../controllers/driver.controller.js";
import { driverStatusController } from "../controllers/driver.controller.js";

router.post('/register',authenticate, authorize("driver"), registerDriverController);
router.patch('/status',authenticate, authorize("driver"), driverStatusController);
router.patch('/location', authenticate, authorize("driver"), driverLocationController);
router.get('/nearby',authenticate, authorize("rider"), nearbyDriversController)

export default router;