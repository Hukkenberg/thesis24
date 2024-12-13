import React, { useEffect, useState } from 'react';
import LabCard from '../cards/LabCard';

interface LabTest {
  id: number;
  testType: string;
  result: string;
  status: string;
}

export default function LabList() {
  const [tests, setTests] = useState<LabTest[]>([]);

  useEffect(() => {
    fetch('/api/lab/tests')
      .then((response) => response.json())
      .then((data) => setTests(data))
      .catch((error) => console.error('Error fetching lab tests:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tests.map((test) => (
        <LabCard key={test.id} test={test} />
      ))}
    </div>
  );
}
