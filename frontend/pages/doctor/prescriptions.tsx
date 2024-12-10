import { useState } from 'react';
import { postData } from '../../utils/api';

const Prescriptions = () => {
  const [patientId, setPatientId] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddPrescription = async () => {
    try {
      await postData('/api/doctor/prescriptions', {
        patientId,
        medication,
        dosage,
        notes,
      });
      alert('Đơn thuốc đã được thêm thành công!');
    } catch (error) {
      console.error('Failed to add prescription:', error);
    }
  };

  return (
    <div>
      <h1>Quản lý đơn thuốc</h1>
      <form>
        <input
          type="text"
          placeholder="Mã bệnh nhân"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tên thuốc"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
        />
        <input
          type="text"
          placeholder="Liều lượng"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
        <textarea
          placeholder="Ghi chú"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="button" onClick={handleAddPrescription}>
          Thêm đơn thuốc
        </button>
      </form>
    </div>
  );
};

export default Prescriptions;
