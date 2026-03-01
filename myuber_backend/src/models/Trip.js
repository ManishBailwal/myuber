import mongoose from "mongoose"

const tripSchema = new mongoose.Schema(
    {
        rider:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,

        },
        driver:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Driver",
            default: null ,//assigned after acceptance

        },
        pickupLocation:{
            type:{
            type:String,
            enum:["Point"],
            default:"Point",
            },
            coordinates:{
                type:[Number],   //[longitude,latitude]
                required:true,
                validate:{
                    validator: function(val){
                        return val.length===2
                    },
                    message: "Coordinates must be [longitude, latitude]"
                }

            }

        },
        dropLocation:{

            type:{
                type: String,
                enum: ["Point"],
                default: "Point"
            },
            coordinates:{
                type:[Number],
                required:true,
                validate:{
                    validator: function(val){
                        return val.length===2
                    },
                    message: "Coordinates must be [longitude, latitude]"
                }
            }

        },
        distanceInKm:{
            type: Number,
            default: 0,
        },
       
        fare:{
            type:Number,
            default:0

        },
        status:{

            type: String,
            enum: [
                "requested",
                "accepted",
                "arriving",
                "ongoing",
                "completed",
                "cancelled",
            ],
            default:"requested"

        },
       
        cancelledBy:{

            type: String,
            enum: ["driver", "rider", null],
            default: null

        },
    },
    {
        timestamps:true,
    }
)


tripSchema.index({createdAt: -1});
tripSchema.index({pickupLocation: "2dsphere"})
tripSchema.index({rider: 1, status: 1})
tripSchema.index({ driver: 1, status: 1 });

export default mongoose.model("Trip", tripSchema);