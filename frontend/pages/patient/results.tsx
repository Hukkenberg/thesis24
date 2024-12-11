import { useEffect, useState } from 'react';

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/api/patient/results')
      .then((res) => res.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div>
      <h1>Test Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.testType}: {result.status}</li>
        ))}
      </ul>
    </div>
  );
}
