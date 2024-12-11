interface Doctor {
  name: string;
  email: string;
  specialization?: string;
  patients: { id: string; name: string }[];
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>
      <p>Email: {doctor.email}</p>
      <p>Specialization: {doctor.specialization || 'N/A'}</p>
      <p>Patients: {doctor.patients.length}</p>
    </div>
  );
}
