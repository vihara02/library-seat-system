import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import route from "./route/seatRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
    .then(()=>{
        console.log("Database Connected Successfully.");
        app.listen(PORT,()=>{
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error)=>console.log(error));

app.use("/api/seats", route);
import authRoutes from './route/authRoute.js'; 
app.use('/api/auth', authRoutes);