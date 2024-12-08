import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Dashboard.module.css';

const LabResults = () => {
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadResults = async () => {
      try {
        const data = await fetchData('/labs/reports');
        setResults(data);
      } catch (err) {
        setError('Failed to load lab results. Please try again later.');
      }
    };

    loadResults();
  }, []);

  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.dashboard}>
      <h1>Lab Results</h1>
      {results.length === 0 ? (
        <p>No lab results available.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p>{result.details}</p>
              <p><strong>Report Date:</strong> {new Date(result.created_at).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LabResults;
