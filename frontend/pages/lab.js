import { useState, useEffect } from 'react';
import axios from 'axios';

export default function LabDashboard() {
  const [labResults, setLabResults] = useState([]);

  useEffect(() => {
    const fetchLabResults = async () => {
      try {
        const response = await axios.get('/api/labs/pending');
        setLabResults(response.data.results);
      } catch (error) {
        console.error('Error fetching lab results', error);
      }
    };
    fetchLabResults();
  }, []);

  const handleUpdateResult = async (id) => {
    const result = prompt('Enter lab result:');
    const status = prompt('Enter status (completed/pending):');
    try {
      await axios.put(`/api/labs/${id}`, { result, status });
      alert('Lab result updated successfully');
    } catch (error) {
      alert('Error updating lab result');
    }
  };

  return (
    <div>
      <h1>Lab Dashboard</h1>
      <ul>
        {labResults.map((result) => (
          <li key={result.id}>
            {result.testType} - {result.status}
            <button onClick={() => handleUpdateResult(result.id)}>Update Result</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
