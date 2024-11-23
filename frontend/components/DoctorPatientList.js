export default function DoctorPatientList({ patients }) {
  return (
    <div>
      <h2>Danh sách bệnh nhân</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.fullName}</li>
        ))}
      </ul>
    </div>
  );
}
