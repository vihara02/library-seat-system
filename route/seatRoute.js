import express from "express";
import { createSeat, fetchSeats, bookSeat, cancelBooking } from "../controller/seatController.js";

const router = express.Router();

router.post("/create", createSeat);
router.get("/getall", fetchSeats);
router.post("/book/:id", bookSeat); 
router.put("/cancel/:id", cancelBooking);

export default router;