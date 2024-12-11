import { useEffect, useState } from 'react';

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('/api/doctor/patients')
      .then((res) => res.json())
      .then((data) => setPatients(data.data));
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name} - {patient.age} years - {patient.gender}</li>
        ))}
      </ul>
    </div>
  );
}
