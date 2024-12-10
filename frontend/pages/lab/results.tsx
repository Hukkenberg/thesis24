// frontend/pages/lab/results.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/LabResults.module.css';
import Chart from 'chart.js/auto';

const LabResults = () => {
  const [results, setResults] = useState([]);
  const [chart, setChart] = useState<any>(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchData('/api/lab/results');
      setResults(data);

      const ctx = document.getElementById('labResultsChart') as HTMLCanvasElement;
      const chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((r: any) => r.date),
          datasets: [{
            label: 'Lab Results',
            data: data.map((r: any) => r.value),
            borderColor: 'rgba(75, 192, 192, 1)',
          }],
        },
      });
      setChart(chartInstance);
    };

    fetchResults();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Kết Quả Cận Lâm Sàng</h2>
        <canvas id="labResultsChart" />
        <ul>
          {results.map((result: any) => (
            <li key={result.id}>{result.name}: {result.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
