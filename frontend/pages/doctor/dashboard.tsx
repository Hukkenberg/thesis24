import { useEffect, useState } from 'react';

interface Patient {
  id: string;
  name: string;
  age: number;
}

export default function DoctorDashboard() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch('/api/doctor/patients')
      .then((res) => res.json())
      .then((data) => setPatients(data.data))
      .catch((error) => console.error('Error fetching patients:', error));
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <h2>My Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}
