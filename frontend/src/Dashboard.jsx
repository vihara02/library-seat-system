import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [seats, setSeats] = useState([]);

    const fetchSeats = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/seats/getall');
            setSeats(res.data);
        } catch (err) { console.error(err); }
    };

    useEffect(() => { fetchSeats(); }, []);

    const handleBook = async (id, isAvailable) => {
        if (!isAvailable) return alert("Already booked! ❌");
        try {
            const token = localStorage.getItem('token');
            await axios.post(`http://localhost:8000/api/seats/book/${id}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Booked Successfully! ✅");
            fetchSeats(); // පාට එකපාරම වෙනස් වෙන්න මෙතන දත්ත ආයෙත් ගන්නවා
        } catch (err) { alert("Booking failed!"); }
    };

    return (
        <div style={{ padding: '30px', backgroundColor: '#F5F2F0', minHeight: '100vh' }}>
            <h2 style={{ color: '#5D4037' }}>Library Seat Booking</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '15px' }}>
                {seats.map(s => (
                    
                    <div key={s._id} onClick={() => handleBook(s._id, s.isAvailable)}
                        style={{
                            padding: '20px', borderRadius: '15px', textAlign: 'center', color: '#fff', cursor: 'pointer',
                            // isAvailable true නම් තද දුඹුරු (#795548), false නම් ලා දුඹුරු (#D7CCC8)
                            backgroundColor: s.isAvailable ? '#795548' : '#D7CCC8',
                            transition: '0.3s'
                        }}>
                        <strong>{s.seatNumber}</strong>
                        <div style={{ fontSize: '10px' }}>{s.isAvailable ? 'Free' : 'Booked'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;