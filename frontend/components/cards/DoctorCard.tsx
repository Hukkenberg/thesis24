interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
}

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-green-50 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-green-700">{doctor.name}</h2>
      <p className="text-gray-600 mt-2">Specialization: <span className="font-medium">{doctor.specialization}</span></p>
      <p className="text-gray-600">Experience: {doctor.experience} years</p>
    </div>
  );
}
