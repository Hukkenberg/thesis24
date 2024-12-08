import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';

const PatientProfile = () => {
  const [profile, setProfile] = useState<{ name: string; age: number } | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchData('/patients/profile');
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Patient Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default PatientProfile;
