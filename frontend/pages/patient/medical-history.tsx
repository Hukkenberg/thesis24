import { useEffect, useState } from 'react';

interface MedicalRecord {
  id: string;
  date: string;
  diagnosis: string;
}

export default function MedicalHistory(): JSX.Element {
  const [history, setHistory] = useState<MedicalRecord[]>([]);

  useEffect(() => {
    fetch('/api/patient/medical-history')
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((error) => console.error('Error fetching medical history:', error));
  }, []);

  return (
    <div>
      <h1>Medical History</h1>
      <ul>
        {history.map((record) => (
          <li key={record.id}>
            {record.date}: {record.diagnosis}
          </li>
        ))}
      </ul>
    </div>
  );
}
