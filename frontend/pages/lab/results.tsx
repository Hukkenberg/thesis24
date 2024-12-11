import { useState } from 'react';

interface LabResult {
  id: number;
  patientName: string;
  result: string;
}

export default function LabResults(): JSX.Element {
  const [results, setResults] = useState<LabResult[]>([
    { id: 1, patientName: 'Nguyễn Văn A', result: 'Bình thường' },
    { id: 2, patientName: 'Trần Thị B', result: 'Cần theo dõi' },
  ]);

  return (
    <div>
      <h1>Quản lý kết quả xét nghiệm</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            Bệnh nhân: {result.patientName} - Kết quả: {result.result}
            <button onClick={() => alert(`Cập nhật kết quả cho ${result.patientName}`)}>Cập nhật</button>
          </li>
        ))}
      </ul>
      <button onClick={() => alert('Thêm kết quả mới')}>Thêm kết quả mới</button>
    </div>
  );
}
