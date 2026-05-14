import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [seats, setSeats] = useState([]);
    const [newSeat, setNewSeat] = useState('');

    useEffect(() => { fetchSeats(); }, []);

    const fetchSeats = async () => {
        const res = await axios.get('http://localhost:8000/api/seats/getall');
        setSeats(res.data);
    };

    const handleCancel = async (id) => {
        await axios.put(`http://localhost:8000/api/seats/cancel/${id}`);
        alert("Seat Released! ✅");
        fetchSeats();
    };

    const handleAddSeat = async () => {
        await axios.post('http://localhost:8000/api/seats/add', { seatNumber: newSeat });
        alert("Seat Added! ➕");
        setNewSeat('');
        fetchSeats();
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#F5F2F0', minHeight: '100vh' }}>
            <h2 style={{ color: '#5D4037' }}>Admin Control Panel</h2>
            
            <div style={{ marginBottom: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '15px' }}>
                <h4>Add New Seat</h4>
                <input value={newSeat} onChange={(e) => setNewSeat(e.target.value)} placeholder="Seat No (e.g. A10)" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }} />
                <button onClick={handleAddSeat} style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#795548', color: '#fff', border: 'none', borderRadius: '8px' }}>Add</button>
            </div>

            <table style={{ width: '100%', backgroundColor: '#fff', borderRadius: '15px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#E8E0D9' }}>
                        <th style={{ padding: '15px' }}>Seat Number</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map(seat => (
                        <tr key={seat._id} style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '15px' }}>{seat.seatNumber}</td>
                            <td>{seat.isBooked ? 'Occupied' : 'Free'}</td>
                            <td>
                                {seat.isBooked && <button onClick={() => handleCancel(seat._id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>Release Seat</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;