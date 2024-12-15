import { useState } from 'react';
import api from '../utils/api';

export default function NewAppointment() {
  const [date, setDate] = useState('');
  const [doctorId, setDoctorId] = useState('');

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}$1`,
        { date, doctorId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Appointment created successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to create appointment');
    }
  };

  return (
    <form onSubmit={handleCreateAppointment}>
      <h1>New Appointment</h1>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        required
      />
      <button type="submit">Create Appointment</button>
    </form>
  );
}
