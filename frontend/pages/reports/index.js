import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Bar } from 'react-chartjs-2';

export default function Reports() {
  const [chartData, setChartData] = useState({});

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
        alert('Failed to load reports');
      }
    };
    fetchReportData();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      {chartData && <Bar data={chartData} />}
    </div>
  );
}
