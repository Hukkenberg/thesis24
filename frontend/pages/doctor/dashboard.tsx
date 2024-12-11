import { useEffect, useState } from 'react';

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('/api/doctor/patients')
      .then((res) => res.json())
      .then((data) => setPatients(data.data));
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <h2>My Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name} - {patient.age} years</li>
        ))}
      </ul>
    </div>
  );
}
