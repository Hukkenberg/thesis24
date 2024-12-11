import { useEffect, useState } from 'react';

export default function LabDashboard() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/api/lab/tests')
      .then((res) => res.json())
      .then((data) => setTests(data.data));
  }, []);

  return (
    <div>
      <h1>Lab Dashboard</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>{test.patient}: {test.type} - {test.status}</li>
        ))}
      </ul>
    </div>
  );
}
