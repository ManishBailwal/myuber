import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema(
    
    {
        trip:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Trip",
            required: true,
            unique: true, //one payment per trip

        },
        rider:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
        method:{
            type: String,
            enum: ["cash", "card", "upi", "wallet"],
            required: true,
        },
        transactionId:{
            type: String,
            default: null ,

        },
        status:{
            type:String,
            enum: ["pending", "processing", "successful", "failed", "refunded"],
            default: "pending",
        },
        currency:{
            type: String,
            default: "INR"

        },
        gateway:{
            type: String,
            enum: ["razorpay", "stripe","manual"],
            default: "manual"

        },
        paidAt:{
            type:Date,
            default: null,
        },
        failureReason:{
            type: String,
            default: null
        },

        webhookPayload:{
            type: Object,
            default: null,
        },
        webhookEvents: [
      {
        event: {
          type: String,
          required: true,
        },
        receivedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],



},

{timestamps: true}

)

paymentSchema.index({rider:1, createdAt:-1})
paymentSchema.index({status: 1})

export default mongoose.model("Payment", paymentSchema);