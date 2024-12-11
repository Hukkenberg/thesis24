interface Patient {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  diagnosis?: string;
}

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="card">
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>Diagnosis: {patient.diagnosis || 'N/A'}</p>
    </div>
  );
}
