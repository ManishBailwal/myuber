
import dotenv from 'dotenv'
dotenv.config()
import http from 'http';
import express from 'express'
import apiRouter from './api/index.js'
import {ApolloServer} from '@apollo/server'
import errorMiddleware from './middlewares/error.middleware.js';

import connectDB from './utils/db.js';





const PORT = process.env.PORT || 4000;


async function bootstrap(){

    const app = express();
    const httpServer = http.createServer(app);


    //global middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

await connectDB();

//REST setup
app.use('/api',apiRouter);

//GraphQl setup


//WebSocket Setup


 // 404 handler (after all routes)
app.use((req,res,next)=>{
    const err = new Error(`Cannot ${req.method} ${req.originalUrl}`);
    err.statusCode = 404;
    next(err);
})


app.use(errorMiddleware);


httpServer.listen(PORT, ()=>{

    console.log(`server running at port: ${PORT}`);
})

}

bootstrap();


