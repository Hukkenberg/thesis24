import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

interface Appointment {
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
}

const AppointmentCalendar: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [form, setForm] = useState<Appointment>({ patientId: '', doctorId: '', date: '', time: '' });

  useEffect(() => {
    axios
      .get('/api/appointments')
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCreateAppointment = () => {
    axios
      .post('/api/appointments/create', form)
      .then(() => {
        alert('Appointment created successfully');
        window.location.reload();
      })
      .catch((error) => console.error('Error creating appointment:', error));
  };

  return (
    <div>
      <h1>Appointment Calendar</h1>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={appointments.map((appt) => ({
          title: `Patient ${appt.patientId} with Doctor ${appt.doctorId}`,
          start: appt.date,
        }))}
        initialView="dayGridMonth"
      />
      <h2>Create Appointment</h2>
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
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleFormChange}
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleFormChange}
        />
        <button type="button" onClick={handleCreateAppointment}>
          Create
        </button>
      </form>
    </div>
  );
};

export default AppointmentCalendar;
