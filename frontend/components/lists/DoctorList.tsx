import React, { useEffect, useState } from 'react';
import DoctorCard from '../cards/DoctorCard';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    fetch('/api/doctor/doctors')
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
