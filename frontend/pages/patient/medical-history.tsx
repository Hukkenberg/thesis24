import { useEffect, useState } from 'react';

export default function MedicalHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('/api/patient/medical-history')
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <div>
      <h1>Medical History</h1>
      <ul>
        {history.map((record) => (
          <li key={record.id}>{record.date}: {record.diagnosis}</li>
        ))}
      </ul>
    </div>
  );
}
