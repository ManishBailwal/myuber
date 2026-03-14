import { Router } from "express";
import { routeLimiter } from "../middlewares/rateLimiter.middleware.js";

import authRoutes from "./auth.routes.js";
import tripRoutes from "./trip.routes.js";
import driverRoutes from "./driver.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

router.use("/auth", routeLimiter(5), authRoutes);     // 5 req/min
router.use("/trips", routeLimiter(20), tripRoutes);   // 20 req/min
router.use("/drivers", routeLimiter(10), driverRoutes); // 10 req/min

export default router;