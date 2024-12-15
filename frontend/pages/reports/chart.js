import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export default function ChartReport() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setChartData(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load chart data');
      }
    };
    fetchReportData();
  }, []);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div>
      <h1>Chart Report</h1>
      <Bar data={chartData} />
    </div>
  );
}
