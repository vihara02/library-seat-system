import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/auth/register', formData);
            alert("Registration Successful! Please Login.");
            window.location.href = "/";
        } catch (err) { alert("Registration failed. Use a different email."); }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#F5F2F0' }}>
            <form onSubmit={handleRegister} style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '350px', textAlign: 'center' }}>
                <h2 style={{ color: '#5D4037', marginBottom: '30px' }}>Join Library System</h2>
                <input type="text" placeholder="Full Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="email" placeholder="Email Address" required onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="password" placeholder="Password" required onChange={(e) => setFormData({...formData, password: e.target.value})} 
                    style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' }} />
                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#8D6E63', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' }}>
                    Register Now
                </button>
                <p style={{ marginTop: '20px', fontSize: '14px', color: '#5D4037' }}>
                    Already have an account? <span onClick={() => window.location.href = "/"} style={{ fontWeight: 'bold', cursor: 'pointer', color: '#8D6E63' }}>Login Here</span>
                </p>
            </form>
        </div>
    );
};

export default Register;