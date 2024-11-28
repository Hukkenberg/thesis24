import { useRouter } from "next/router";

const DoctorDashboard = () => {
  const router = useRouter();

  // Sample patient data
  const patients = [
    { id: 1, name: "John Doe", dob: "1980-01-01", status: "Active" },
    { id: 2, name: "Jane Smith", dob: "1990-05-12", status: "Inactive" },
  ];

  const options = [
    { label: "Patient List", icon: "📋", action: () => alert("Patient List Clicked") },
    { label: "Schedule", icon: "🗓️", action: () => alert("Schedule Clicked") },
    { label: "Prescriptions", icon: "💊", action: () => alert("Prescriptions Clicked") },
    { label: "Reports", icon: "📊", action: () => alert("Reports Clicked") },
  ];

  // Navigate to patient details
  const viewPatientDetails = (id) => {
    router.push(`/doctor/patient/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {options.map((option, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md flex flex-col items-center cursor-pointer hover:bg-gray-50"
            onClick={option.action}
          >
            <div className="text-4xl mb-2">{option.icon}</div>
            <p className="font-medium">{option.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-4">Patient List</h2>
        <ul>
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="flex justify-between items-center p-4 mb-4 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer shadow"
              onClick={() => viewPatientDetails(patient.id)}
            >
              <div>
                <p>
                  <strong>Name:</strong> {patient.name}
                </p>
                <p>
                  <strong>DOB:</strong> {patient.dob}
                </p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    patient.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {patient.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDashboard;