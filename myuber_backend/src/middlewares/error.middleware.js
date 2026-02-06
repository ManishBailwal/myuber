import logger from '../utils/logger.js'

export default function errorMiddleware(err,req,res,next){

    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.ip;

    logger.error({
        message:err.message,
        stack: err.stack,
        path: req.originalUrl,
        method: req.method,
        ip,
    })

    res.status(err.statusCode || 500).json({
        success:false,
        message: err.message || 'Internal Server Error'
    })

    next(err);
}