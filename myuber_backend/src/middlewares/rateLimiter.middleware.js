import rateLimit from 'express-rate-limit'

export const routeLimiter =  (maxReq)=>{

   return rateLimit({
    windowMs: 1 * 60 * 1000, //1 minute
    max:maxReq,
    message:{
        success:false,
        message: "To many requests from this IP, please try again later",
    },
    standardHeaders: true, 
    legacyHeaders: false,
})
}