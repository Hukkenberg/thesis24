import { useEffect, useState } from 'react';

interface Result {
  id: string;
  testType: string;
  status: string;
}

export default function Results(): JSX.Element {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetch('/api/patient/results')
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((error) => console.error('Error fetching results:', error));
  }, []);

  return (
    <div>
      <h1>Test Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.testType}: {result.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
