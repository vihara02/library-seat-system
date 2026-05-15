import LibrarySeat from "../model/seatModel.js";

export const createSeat = async (req, res) => {
    try {
        const { seatNumber, floor } = req.body;

        const seatExist = await LibrarySeat.findOne({ seatNumber });
        if (seatExist) {
            return res.status(400).json({ message: "Seat number already exists." });
        }

        const newSeat = new LibrarySeat({ 
            seatNumber, 
            floor, 
            isAvailable: true 
        });

        const savedSeat = await newSeat.save();
        res.status(201).json(savedSeat);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const fetchSeats = async (req, res) => {
    try {
        const seats = await LibrarySeat.find().populate('bookedBy', 'name email');
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const bookSeat = async (req, res) => {
    try {
        const id = req.params.id;
        const seat = await LibrarySeat.findById(id);

        if (!seat) return res.status(404).json({ message: "Seat not found" });
        if (!seat.isAvailable) return res.status(400).json({ message: "Seat already booked" });

        const updatedSeat = await LibrarySeat.findByIdAndUpdate(
            id,
            { isAvailable: false, updatedAt: Date.now() },
            { new: true }
        );
        res.status(200).json({ message: "Booked successfully", updatedSeat });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const cancelBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSeat = await LibrarySeat.findByIdAndUpdate(
            id,
            { isAvailable: true, bookedBy: null, updatedAt: Date.now() },
            { new: true }
        );
        res.status(200).json({ message: "Seat is now free", updatedSeat });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};