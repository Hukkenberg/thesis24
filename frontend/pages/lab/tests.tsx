import { useEffect, useState } from 'react';

interface LabTest {
  id: string;
  patient: string;
  type: string;
  status: string;
}

export default function LabTests(): JSX.Element {
  const [tests, setTests] = useState<LabTest[]>([]);

  useEffect(() => {
    fetch('/api/lab/tests')
      .then((res) => res.json())
      .then((data) => setTests(data.data))
      .catch((error) => console.error('Error fetching lab tests:', error));
  }, []);

  return (
    <div>
      <h1>Pending Tests</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>
            {test.patient}: {test.type} - {test.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
