import Seat from "../model/seatModel.js";

export const createSeat=async (req,res)=>{
    try{
        const seatDate=new Seat(req.body);
        const {seatNumber}=seatDate;
        const seatExist=await Seat.findOne({seatNumber});
        if(seatExist){
            return res.status(400).json({message:"Seat Already Exists."});
        }
        const savedSeat=await seatDate.save();
        res.status(200).json(savedSeat);
    }
    catch(error){
        res.status(500).json({error:"Internal Server Error."});
    }
}
export const fetchSeats=async (req,res)=>{
    try{
        const seats = await Seat.find();
        if(seats.length===0){
            return res.status(404).json({message:"No Seats Found."});
        }
        res.status(200).json(seats);
    } 
    catch(error){
        res.status(500).json({error:"Internal Server Error."});
    }
}
export const updateSeat=async (req,res)=>{
    try{
        const id=req.params.id;
        const seatExist=await Seat.findById(id);
        if(!seatExist){
            return res.status(404).json({message:"Seat Not Found."});
        }
        const updatedSeat = await Seat.findByIdAndUpdate(id,req.body,{new:true});
        res.status(201).json(updatedSeat);
    } 
    catch(error){
        res.status(500).json({error:"Internal Server Error."});
    }
}
export const deleteSeat=async(req,res)=>{
    try{
        const id=req.params.id;
        const seatExist=await Seat.findById(id);
        if (!seatExist){
            return res.status(404).json({message:"Seat Not Found."});
        }
        await Seat.findByIdAndDelete(id);
        res.status(201).json({message:"Seat Deleted Successfully."});
    } 
    catch (error){
        res.status(500).json({error:"Internal Server Error."});
    }
}