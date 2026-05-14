import express from "express";
import { fetchSeats, createSeat, bookSeat, cancelBooking } from "../controller/seatController.js";

const router = express.Router();

// Middleware (verifyToken) අයින් කරලා මේ විදියට ලියන්න
router.get("/getall", fetchSeats);
router.post("/book/:id", bookSeat); 
router.post("/create", createSeat);

export default router;