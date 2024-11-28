import { useState } from "react";

const LabDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: "John Doe", dob: "1980-01-01" },
    { id: 2, name: "Jane Smith", dob: "1990-05-12" },
  ];

  const handleSelectPatient = (id) => {
    const patient = patients.find((p) => p.id === id);
    setSelectedPatient(patient);
  };

  return (
    <div className="flex p-4 space-x-4">
      <div className="w-1/3">
        <h2>Patients</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id} onClick={() => handleSelectPatient(patient.id)}>
              {patient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3">
        {selectedPatient ? (
          <div>
            <h2>Lab Results for {selectedPatient.name}</h2>
          </div>
        ) : (
          <p>Select a patient to view lab results.</p>
        )}
      </div>
    </div>
  );
};

export default LabDashboard;