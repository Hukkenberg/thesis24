import { useEffect, useState } from 'react';

export default function LabTests() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch('/api/lab/tests')
      .then((res) => res.json())
      .then((data) => setTests(data.data));
  }, []);

  return (
    <div>
      <h1>Pending Tests</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>{test.patient}: {test.type} - {test.status}</li>
        ))}
      </ul>
    </div>
  );
}
