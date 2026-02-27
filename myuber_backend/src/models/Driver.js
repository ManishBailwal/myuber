import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true,
            unique: true,

        },
        vehicleNumber:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            uppercase:true,
        },
        vehicleType:{
            type: String,
            enum:["car","bike","auto"],
            required: true,

        },
        status:{
            type: String,
            enum: ["offline", "online", "busy", "on_trip"],
            default: "offline",
        },
        currentLocation:{
            type:{
                type:String,
                enum:["Point"],
                default:"Point"
            },
            coordinates:{
                type: [Number], //longitude,latitude,
                required: true,
                validate:{
                    validator:function(val){
                        return val.length === 2;
                    },
                    message:"Coordinates must be [longitude, latitude]",
                }
            }
        }
    },
    {timestamps:true}
)

//for geo queries
driverSchema.index(
    {currentLocation:"2dsphere"},
    {partialFilterExpression:{ status: "online"}}
    
)


export default mongoose.model("Driver",driverSchema);