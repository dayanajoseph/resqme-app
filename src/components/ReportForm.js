import React, { useState } from 'react';
import axios from 'axios';

function ReportForm() {
    const [report, setReport] = useState({ photoUrl: '', location: '' });

    const handleChange = e => {
        setReport({ ...report, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/report', report);
            alert('Report submitted successfully!');
        } catch (error) {
            alert('Failed to submit report.');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="photoUrl" value={report.photoUrl} onChange={handleChange} placeholder="Photo URL" required />
            <input type="text" name="location" value={report.location} onChange={handleChange} placeholder="Location" required />
            <button type="submit">Submit Report</button>
        </form>
    );
}

export default ReportForm;
