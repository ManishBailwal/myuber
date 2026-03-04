import {Router} from 'express'

import authRoutes from './auth.routes.js'

const router = Router();

router.get('/',(req,res)=>{
    res.json({message:"API is working"})
})

//Mounting auth routes
router.use('/auth',authRoutes);


export default router;