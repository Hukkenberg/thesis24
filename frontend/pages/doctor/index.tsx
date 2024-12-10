// frontend/pages/lab/results.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/LabResults.module.css';
import Chart from 'chart.js/auto';

const LabResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchData('/api/lab/results');
      setResults(data);
    };
    fetchResults();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Lab Results</h2>
        <canvas id="labResultsChart"></canvas>
        <ul>
          {results.map((result: any) => (
            <li key={result.id}>
              {result.name}: {result.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
