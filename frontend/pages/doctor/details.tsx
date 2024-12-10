import { useEffect, useState } from 'react';
import { fetchData, postData } from '../../utils/api';

const DoctorDetails = ({ patientId }: { patientId: string }) => {
  const [patient, setPatient] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState('');

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const data = await fetchData(`/api/doctor/patients/${patientId}`);
      setPatient(data);
      setDiagnosis(data.diagnosis || '');
    };
    fetchPatientDetails();
  }, [patientId]);

  const handleUpdateDiagnosis = async () => {
    await postData(`/api/doctor/patients/${patientId}/diagnosis`, { diagnosis });
    alert('Cập nhật chẩn đoán thành công!');
  };

  if (!patient) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h1>Chi tiết bệnh nhân</h1>
      <p><strong>Tên:</strong> {patient.name}</p>
      <p><strong>Tuổi:</strong> {patient.age}</p>
      <p><strong>Giới tính:</strong> {patient.gender}</p>
      <textarea
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        placeholder="Nhập chẩn đoán"
      ></textarea>
      <button onClick={handleUpdateDiagnosis}>Lưu chẩn đoán</button>
    </div>
  );
};

export default DoctorDetails;
