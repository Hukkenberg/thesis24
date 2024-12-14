import { useState } from 'react';

export default function UpdateDiagnosis({ patientId }) {
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/doctor/treatment-plan', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientId, diagnosis, treatmentPlan }),
      });
      if (res.ok) {
        alert('Cập nhật chẩn đoán thành công!');
      } else {
        alert('Có lỗi xảy ra!');
      }
    } catch (error) {
      console.error('Error updating diagnosis:', error);
    }
  };

  return (
    <div className="update-diagnosis">
      <h1>Cập nhật Chẩn đoán và Kế hoạch điều trị</h1>
      <form onSubmit={handleSubmit}>
        <label>Chẩn đoán:</label>
        <textarea
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          required
        />
        <label>Phác đồ điều trị:</label>
        <textarea
          value={treatmentPlan}
          onChange={(e) => setTreatmentPlan(e.target.value)}
          required
        />
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  );
}