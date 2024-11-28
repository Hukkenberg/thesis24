import { useRouter } from "next/router";

const DoctorDashboard = () => {
  const router = useRouter();

  // Danh sách bệnh nhân mẫu
  const patients = [
    { id: 1, name: "John Doe", dob: "1980-01-01", status: "Active" },
    { id: 2, name: "Jane Smith", dob: "1990-05-12", status: "Inactive" },
  ];

  // Hàm xử lý khi nhấn vào chi tiết bệnh nhân
  const viewPatientDetails = (id) => {
    router.push(`/doctor/patient/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Doctor Dashboard</h1>

      <div className="p-4 bg-gray-50 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Patient List</h2>

        <ul>
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="p-4 mb-4 bg-white shadow rounded-md cursor-pointer hover:bg-gray-100"
              onClick={() => viewPatientDetails(patient.id)}
            >
              <p>
                <strong>Name:</strong> {patient.name}
              </p>
              <p>
                <strong>DOB:</strong> {patient.dob}
              </p>
              <p>
                <strong>Status:</strong> {patient.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorDashboard;
