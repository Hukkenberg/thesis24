import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrescriptionManagement = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [form, setForm] = useState({ patientId: '', doctorId: '', medications: '', notes: '' });

    useEffect(() => {
        axios.get('/api/prescriptions') // Fetch all prescriptions
            .then(response => setPrescriptions(response.data))
            .catch(error => console.error('Error fetching prescriptions:', error));
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCreatePrescription = () => {
        axios.post('/api/prescriptions/create', form)
            .then(() => {
                alert('Prescription created successfully');
                window.location.reload();
            })
            .catch(error => console.error('Error creating prescription:', error));
    };

    const handleDownloadReport = () => {
        axios.get('/api/prescriptions/report', { responseType: 'blob' })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'prescription_report.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => console.error('Error downloading report:', error));
    };

    return (
        <div>
            <h1>Prescription Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Doctor ID</th>
                        <th>Medications</th>
                        <th>Notes</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map(prescription => (
                        <tr key={prescription.id}>
                            <td>{prescription.patientId}</td>
                            <td>{prescription.doctorId}</td>
                            <td>{prescription.medications}</td>
                            <td>{prescription.notes}</td>
                            <td>{prescription.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Create Prescription</h2>
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
                    name="doctorId"
                    placeholder="Doctor ID"
                    value={form.doctorId}
                    onChange={handleFormChange}
                />
                <textarea
                    name="medications"
                    placeholder="Medications"
                    value={form.medications}
                    onChange={handleFormChange}
                />
                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={form.notes}
                    onChange={handleFormChange}
                />
                <button type="button" onClick={handleCreatePrescription}>Create</button>
            </form>
            <button type="button" onClick={handleDownloadReport}>Download Report</button>
        </div>
    );
};

export default PrescriptionManagement;
