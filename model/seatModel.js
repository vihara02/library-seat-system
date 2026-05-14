import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    seatNumber: {
        type: String,
        required: true,
        unique: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("LibrarySeat", seatSchema);