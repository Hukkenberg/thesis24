export default function PatientCard({ patient }) {
  return (
    <div className="card">
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Diagnosis: {patient.diagnosis || 'N/A'}</p>
    </div>
  );
}
