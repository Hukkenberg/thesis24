import { useState } from 'react';

interface Diagnosis {
  id: number;
  patientName: string;
  notes: string;
  prescription: string;
}

export default function Diagnosis(): JSX.Element {
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([
    { id: 1, patientName: 'Nguyễn Văn A', notes: 'Sốt, đau đầu', prescription: 'Paracetamol 500mg' },
    { id: 2, patientName: 'Trần Thị B', notes: 'Ho khan', prescription: 'Codein 15mg' },
  ]);

  return (
    <div>
      <h1>Xử lý chẩn đoán</h1>
      <ul>
        {diagnoses.map((diag) => (
          <li key={diag.id}>
            Bệnh nhân: {diag.patientName} - Ghi chú: {diag.notes}
            <button onClick={() => alert(`Chỉnh sửa chẩn đoán: ${diag.patientName}`)}>Chỉnh sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
