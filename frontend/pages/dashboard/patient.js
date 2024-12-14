import { useState, useEffect } from 'react';
import Table from '../../components/Table';

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [labResults, setLabResults] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resAppointments = await fetch('/api/patient/appointments');
        const resLabResults = await fetch('/api/patient/lab-results');
        const resPersonalInfo = await fetch('/api/patient/info');
        setAppointments(await resAppointments.json());
        setLabResults(await resLabResults.json());
        setPersonalInfo(await resPersonalInfo.json());
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="dashboard">
      <h1>Dashboard Bệnh Nhân</h1>
      <section>
        <h2>Thông tin cá nhân</h2>
        <div>
          <p>Họ tên: {personalInfo.name}</p>
          <p>Tuổi: {personalInfo.age}</p>
          <p>Giới tính: {personalInfo.gender}</p>
        </div>
      </section>
      <section>
        <h2>Lịch khám</h2>
        <Table data={appointments} />
      </section>
      <section>
        <h2>Kết quả xét nghiệm</h2>
        <Table data={labResults} />
      </section>
    </div>
  );
}