
import React, { useState, useEffect } from "react";
import styles from "../../styles/Appointments.module.css";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/api/schedule")
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch(() => alert("Error fetching appointments"));
  }, []);

  const cancelAppointment = (id) => {
    fetch(`/api/schedule/cancel`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then(() => {
        alert("Appointment canceled");
        setAppointments(appointments.filter((appt) => appt.id !== id));
      })
      .catch(() => alert("Error canceling appointment"));
  };

  return (
    <div className={styles.appointments}>
      <h1>Manage Appointments</h1>
      <ul className={styles.appointmentsList}>
        {appointments.map((appt) => (
          <li className={styles.appointmentsListItem} key={appt.id}>
            {appt.date} - {appt.status}
            <button
              className={styles.cancelButton}
              onClick={() => cancelAppointment(appt.id)}
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
