

const riderSockets = new Map();
const driverSockets = new Map();


export const registerRider = (riderId, socketId) => {

    riderSockets.set(riderId, socketId);
}

export const removeRider = (riderId) => {

    riderSockets.delete(riderId);
}

export const getRiderSocket = (riderId) => {

    return riderSockets.get(riderId);
}

export const registerDriver = (driverId, socketId) => {

    driverSockets.set(driverId, socketId);

};


export const removeDriver = (driverId) => { 

    driverSockets.delete(driverId);
};

export const getDriverSocket = (driverId) =>{
    return driverSockets.get(driverId);
}