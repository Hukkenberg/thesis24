import Navbar from "../../components/Navbar";

export default function DoctorDashboard() {
  const patients = [
    { id: 1, name: "Nguyen Van A", age: 30 },
    { id: 2, name: "Tran Thi B", age: 25 },
  ];

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Danh sách bệnh nhân</h1>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Tên</th>
              <th className="border border-gray-300 px-4 py-2">Tuổi</th>
              <th className="border border-gray-300 px-4 py-2">Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="border border-gray-300 px-4 py-2">{patient.id}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
                <td className="border border-gray-300 px-4 py-2">{patient.age}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={`/dashboard/patient/${patient.id}`}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Xem chi tiết
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}