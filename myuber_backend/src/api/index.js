import {Router} from 'express'

import authRoutes from './auth.routes.js'
import tripRoutes from './trip.routes.js'
import driverRoutes from './driver.routes.js'

const router = Router();

router.get('/',(req,res)=>{
    res.json({message:"API is working"})
})

//Mounting auth routes
router.use('/auth',authRoutes);
router.use('/trips',tripRoutes)
router.use('/drivers',driverRoutes);

export default router;