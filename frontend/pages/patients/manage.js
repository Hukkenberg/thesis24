import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ManagePatients() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatients(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load patients');
      }
    };
    fetchPatients();
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient(patient);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.put(`/patients/${selectedPatient.id}`, selectedPatient, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Patient updated successfully!');
      setSelectedPatient(null); // Clear selection
    } catch (err) {
      console.error(err);
      alert('Failed to update patient');
    }
  };

  return (
    <div>
      <h1>Manage Patients</h1>
      {selectedPatient ? (
        <form onSubmit={handleSave}>
          <h2>Edit Patient</h2>
          <input
            type="text"
            value={selectedPatient.name}
            onChange={(e) =>
              setSelectedPatient({ ...selectedPatient, name: e.target.value })
            }
            required
          />
          <input
            type="text"
            value={selectedPatient.contactNumber}
            onChange={(e) =>
              setSelectedPatient({
                ...selectedPatient,
                contactNumber: e.target.value,
              })
            }
            required
          />
          <button type="submit">Save</button>
          <button onClick={() => setSelectedPatient(null)}>Cancel</button>
        </form>
      ) : (
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.contactNumber}
              <button onClick={() => handleEdit(patient)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
