import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

interface ProgressData {
  date: string;
  value: number;
}

const DiseaseProgression: React.FC = () => {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);

  useEffect(() => {
    axios
      .get('/api/patient/123/progress') // Replace with dynamic patient ID
      .then((response) => setProgressData(response.data))
      .catch((error) => console.error('Error fetching progression data:', error));
  }, []);

  const chartData = {
    labels: progressData.map((item) => item.date),
    datasets: [
      {
        label: 'Lab Results',
        data: progressData.map((item) => item.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h1>Disease Progression</h1>
      {progressData.length ? (
        <Line data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DiseaseProgression;
