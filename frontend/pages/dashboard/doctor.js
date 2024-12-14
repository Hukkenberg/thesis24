import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Lấy danh sách bệnh nhân được phân công
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/doctors/patients');
        setPatients(response.data.patients);
      } catch (error) {
        console.error('Error fetching patients', error);
      }
    };
    fetchPatients();
  }, []);

  const handleUpdateDiagnosis = async (patientId) => {
    const diagnosis = prompt('Enter diagnosis:');
    const treatmentPlan = prompt('Enter treatment plan:');
    try {
      await axios.put(`/api/doctors/patients/${patientId}/diagnosis`, { diagnosis, treatmentPlan });
      alert('Diagnosis updated successfully');
    } catch (error) {
      alert('Error updating diagnosis');
    }
  };

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.diagnosis || 'No diagnosis yet'}
            <button onClick={() => handleUpdateDiagnosis(patient.id)}>Update Diagnosis</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
