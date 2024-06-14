import React, { useState } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './form.css'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    // const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        e.preventDefault();
        navigate('/dashboard');
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('/api/users/login', formData);
    //         alert('Logged in successfully');
    //         localStorage.setItem('token', response.data.token);
    //         navigate('/');
    //     } catch (error) {
    //         console.error(error.response.data);
    //     }
    // }

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
            <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
             <button type="submit">Login</button> 
             </form>  
            
        </div>
    );
}

export default Login;
