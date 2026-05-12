import express from "express";
import {createSeat, fetchSeats, updateSeat, deleteSeat} from "../controller/seatController.js";

const route = express.Router();

route.post("/create", createSeat);
route.get("/getAll", fetchSeats);
route.put("/update/:id", updateSeat);
route.delete("/delete/:id", deleteSeat);

export default route;