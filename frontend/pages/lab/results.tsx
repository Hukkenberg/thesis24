import { useEffect, useState } from 'react';
import { fetchData, postData } from '../../utils/api';

const LabResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchData('/api/lab/results');
      setResults(data);
    };
    fetchResults();
  }, []);

  const handleUpdate = (id, newResult) => {
    postData(`/api/lab/results/${id}`, { result: newResult });
  };

  return (
    <div className="lab-results">
      <h1>Kết quả xét nghiệm</h1>
      <table>
        <thead>
          <tr>
            <th>Tên bệnh nhân</th>
            <th>Kết quả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.patientName}</td>
              <td>
                <input
                  type="text"
                  defaultValue={result.result}
                  onBlur={(e) => handleUpdate(result.id, e.target.value)}
                />
              </td>
              <td>
                <button>Cập nhật</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabResults;
