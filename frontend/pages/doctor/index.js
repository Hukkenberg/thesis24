import { useRouter } from "next/router";

const DoctorDashboard = () => {
  const router = useRouter();
  const patients = [
    { id: 1, name: "John Doe", dob: "1980-01-01" },
    { id: 2, name: "Jane Smith", dob: "1990-05-12" },
  ];

  const viewPatientDetails = (id) => {
    router.push(/doctor/patient/${id});
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
      <ul>
        {patients.map((patient) => (
          <li
            key={patient.id}
            className="p-4 bg-gray-100 mb-4 rounded-md cursor-pointer"
            onClick={() => viewPatientDetails(patient.id)}
          >
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>DOB:</strong> {patient.dob}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;