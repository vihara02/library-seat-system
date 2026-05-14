import LibrarySeat from "../model/seatModel.js";

// සියලුම ආසන ලබා ගැනීම
export const fetchSeats = async (req, res) => {
    try {
        const seats = await LibrarySeat.find().populate('bookedBy', 'name email');
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// ආසනයක් වෙන් කිරීම (Booking)
export const bookSeat = async (req, res) => {
    try {
        const id = req.params.id;
        const seat = await LibrarySeat.findById(id);

        if (!seat) return res.status(404).json({ message: "Seat not found." });
        if (!seat.isAvailable) return res.status(400).json({ message: "Seat already booked." });

        const updatedSeat = await LibrarySeat.findByIdAndUpdate(
            id,
            { isAvailable: false, updatedAt: Date.now() },
            { new: true }
        );

        res.status(200).json({ message: "Seat booked successfully!", updatedSeat });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// අලුතින් ආසනයක් එකතු කිරීම (Admin)
export const createSeat = async (req, res) => {
    try {
        const { seatNumber, floor } = req.body;
        const seatExist = await LibrarySeat.findOne({ seatNumber });
        if (seatExist) return res.status(400).json({ message: "Seat already exists." });

        const newSeat = new LibrarySeat({ seatNumber, floor, isAvailable: true });
        await newSeat.save();
        res.status(201).json(newSeat);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Booking අවලංගු කිරීම
export const cancelBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedSeat = await LibrarySeat.findByIdAndUpdate(
            id,
            { isAvailable: true, bookedBy: null, updatedAt: Date.now() },
            { new: true }
        );
        res.status(200).json({ message: "Booking cancelled!", updatedSeat });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error." });
    }
};