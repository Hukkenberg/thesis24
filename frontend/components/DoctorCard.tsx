export default function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p>Email: {doctor.email}</p>
      <p>Specialization: {doctor.specialization || 'N/A'}</p>
      <p>Patients: {doctor.patients.length}</p>
    </div>
  );
}
