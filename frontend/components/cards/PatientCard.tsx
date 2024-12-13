interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  diagnosis?: string;
}

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
      <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{patient.name}</h3>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
          {patient.diagnosis && <p>Diagnosis: {patient.diagnosis}</p>}
      </div>
  );
}
