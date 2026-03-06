import express from "express"
const router = express.Router();
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";
import { registerDriverController } from "../controllers/driver.controller.js";
import { driverStatusController } from "../controllers/driver.controller.js";

router.post('/register',authenticate, authorize("driver"), registerDriverController);
router.patch('/status',authenticate, authorize("driver"), driverStatusController);

export default router;