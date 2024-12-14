
import { useEffect, useState } from 'react';
import { fetchDoctorAppointments } from '../../api/doctor/appointments';

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadAppointments() {
      try {
        const data = await fetchDoctorAppointments();
        setAppointments(data);
      } catch (err) {
        setError('Không thể tải danh sách cuộc hẹn');
      } finally {
        setLoading(false);
      }
    }

    loadAppointments();
  }, []);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Danh sách cuộc hẹn</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorAppointments;
