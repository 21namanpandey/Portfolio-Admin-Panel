import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    senderName: {
        type: String,
        minLenght: [2, "Name must contain at least 2 character"]
    },
    subject: {
        type: String,
        minLenght: [2, "subject must contain at least 2 character"]
    },
    message: {
        type: String,
        minLenght: [2, "Message must contain at least 2 character"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export const Message = mongoose.model("Message", messageSchema)