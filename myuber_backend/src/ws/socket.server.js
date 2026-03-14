import { Server } from "socket.io";
import { EVENTS } from "./events/events.js";

import { registerDriver, removeDriver, registerRider, removeRider } from "./registry/socketRegistry.js";

let io;

export const initSocketServer = (httpServer)=>{

    io = new Server(httpServer, {

        cors:{
            origin:"*"
        }
    })

    console.log("Socket.IO server initialized ✅"); 


    io.on("connection", (socket)=>{

        //rider connects
        socket.on(EVENTS.RIDER_CONNECTED, (riderId)=>{
            registerRider(riderId,socket.id);
            console.log("Rider Connected", riderId);
        })


        //driver connects
        socket.on(EVENTS.DRIVER_CONNECTED, (driverId)=>{
            registerDriver(driverId, socket.id);
            console.log("Driver Connected", driverId);
        })


    })

    return io;



}

export const getIo = ()=>{
    if(!io){
        throw new Error("Socket.io is not initialized");
    }

    return io;
}