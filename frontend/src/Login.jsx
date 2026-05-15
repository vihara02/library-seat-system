import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert("Invalid Credentials! ❌");
        }
    };
    

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Library System</h2>
                <p style={styles.subtitle}>Login to book your seat</p>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required style={styles.input} />
                    <button type="submit" style={styles.button}>Login Now</button>
                    <p style={{ marginTop: '20px', fontSize: '14px', color: '#5D4037' }}>
    Don't have an account? 
    <span 
        onClick={() => window.location.href = "/register"} 
        style={{ color: '#8D6E63', fontWeight: 'bold', cursor: 'pointer', marginLeft: '5px', textDecoration: 'underline' }}
    >
        Register Here
    </span>
</p>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F2F0' },
    card: { backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', width: '350px' },
    title: { color: '#5D4037', marginBottom: '10px' },
    subtitle: { color: '#8D6E63', marginBottom: '20px', fontSize: '14px' },
    input: { width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '10px', border: '1px solid #D7CCC8', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', borderRadius: '10px', border: 'none', backgroundColor: '#795548', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }
};

export default Login;