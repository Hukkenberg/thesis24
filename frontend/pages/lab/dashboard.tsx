import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LabDashboard = () => {
    const [labResults, setLabResults] = useState([]);
    const [form, setForm] = useState({ patientId: '', testType: '', result: '' });

    useEffect(() => {
        axios.get('/api/labResults') // Fetch all lab results
            .then(response => setLabResults(response.data))
            .catch(error => console.error('Error fetching lab results:', error));
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleUploadResult = () => {
        axios.post('/api/labResults/upload', form)
            .then(() => {
                alert('Lab result uploaded successfully');
                window.location.reload();
            })
            .catch(error => console.error('Error uploading lab result:', error));
    };

    return (
        <div>
            <h1>Lab Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Test Type</th>
                        <th>Result</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {labResults.map(result => (
                        <tr key={result.id}>
                            <td>{result.patientId}</td>
                            <td>{result.testType}</td>
                            <td>{result.result || 'Pending'}</td>
                            <td>{result.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Upload Lab Result</h2>
            <form>
                <input
                    type="text"
                    name="patientId"
                    placeholder="Patient ID"
                    value={form.patientId}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="testType"
                    placeholder="Test Type"
                    value={form.testType}
                    onChange={handleFormChange}
                />
                <input
                    type="text"
                    name="result"
                    placeholder="Result"
                    value={form.result}
                    onChange={handleFormChange}
                />
                <button type="button" onClick={handleUploadResult}>Upload</button>
            </form>
        </div>
    );
};

export default LabDashboard;
