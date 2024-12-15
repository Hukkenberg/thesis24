import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Prescriptions() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPrescriptions(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load prescriptions');
      }
    };
    fetchPrescriptions();
  }, []);

  return (
    <div>
      <h1>Prescriptions</h1>
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index}>
            {prescription.medicineList} - {prescription.notes || 'No notes'}
          </li>
        ))}
      </ul>
    </div>
  );
}
