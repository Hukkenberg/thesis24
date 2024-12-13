interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  diagnosis?: string;
}

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-blue-700">{patient.name}</h2>
      <p className="text-gray-600 mt-2">Age: {patient.age}</p>
      <p className="text-gray-600">Gender: {patient.gender}</p>
      {patient.diagnosis && <p className="text-gray-600">Diagnosis: {patient.diagnosis}</p>}
    </div>
  );
}
