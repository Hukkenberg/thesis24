import { useEffect, useState } from 'react';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
}

export default function Patients(): JSX.Element {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch('/api/doctor/patients')
      .then((res) => res.json())
      .then((data) => setPatients(data.data))
      .catch((error) => console.error('Error fetching patients:', error));
  }, []);

  return (
    <div>
      <h1>Patients</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age} years - {patient.gender}
          </li>
        ))}
      </ul>
    </div>
  );
}
