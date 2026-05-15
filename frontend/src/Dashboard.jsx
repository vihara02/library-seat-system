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
        if (!isAvailable) return; 
        try {
            await axios.post(`http://localhost:8000/api/seats/book/${id}`);
            alert("Seat Booked Successfully");
            fetchSeats();
        } catch (err) { alert("Booking failed"); }
    };

    const handleCancel = async (e, id) => {
        e.stopPropagation(); 
        try {
            await axios.put(`http://localhost:8000/api/seats/cancel/${id}`);
            alert("Booking Cancelled");
            fetchSeats();
        } catch (err) { alert("Cancel failed"); }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = "/"; 
    };
    
    return (
        <div style={{ padding: '40px', backgroundColor: '#F5F2F0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
                <h2 style={{ color: '#5D4037', margin: 0 }}>Library Seat Booking</h2>
                <button 
                    onClick={handleLogout}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#8D6E63',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Logout
                </button>
            </div>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', 
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto'
            }}>
                {seats.map(s => (
                    <div key={s._id} onClick={() => handleBook(s._id, s.isAvailable)}
                        style={{
                            padding: '20px 10px', 
                            borderRadius: '15px', 
                            textAlign: 'center', 
                            color: '#fff', 
                            cursor: s.isAvailable ? 'pointer' : 'default',
                            backgroundColor: s.isAvailable ? '#795548' : '#D7CCC8',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: '0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <strong style={{ fontSize: '1.1rem' }}>{s.seatNumber}</strong>
                        <div style={{ fontSize: '11px', marginTop: '5px', marginBottom: '10px' }}>
                            {s.isAvailable ? 'Available' : 'Booked'}
                        </div>

                        {!s.isAvailable && (
                            <button 
                                onClick={(e) => handleCancel(e, s._id)}
                                style={{
                                    padding: '5px 10px',
                                    fontSize: '10px',
                                    backgroundColor: '#E57373',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;