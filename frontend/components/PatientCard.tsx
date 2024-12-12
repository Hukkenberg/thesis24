
interface Patient {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  diagnosis?: string;
}

export default function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>
      <p className="text-gray-600 mt-2">Age: <span className="font-medium">{patient.age}</span></p>
      <p className="text-gray-600">Gender: <span className="font-medium capitalize">{patient.gender}</span></p>
      <p className="text-gray-600">Diagnosis: <span className="font-medium">{patient.diagnosis || 'N/A'}</span></p>
    </div>
  );
}
