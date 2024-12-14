import React from 'react';

const PatientList = () => {
  const patients = [
    { id: 1, name: 'Nguyen Van A', age: 30, condition: 'Flu' },
    { id: 2, name: 'Tran Thi B', age: 25, condition: 'Diabetes' },
  ];

  return (
    <div>
      <h1>Patient List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
              <td>
                <a
                  href={`/doctor/patient-details/${patient.id}`}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;