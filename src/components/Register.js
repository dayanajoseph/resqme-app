import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [user, setUser] = useState({
        fname: '', lname: '', phone: '', email: '', password: '', location: ''
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/register', user);
            alert('User registered successfully!');
            // Navigate to another route if needed
        } catch (error) {
            alert('Failed to register user.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="First Name" required />
            <input type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="Last Name" required />
            <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="location" value={user.location} onChange={handleChange} placeholder="Location" required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
