
import { useEffect, useState } from 'react';
import { fetchDoctorAppointments } from '../../api/doctor/appointments';

// Định nghĩa kiểu dữ liệu cho một cuộc hẹn
type Appointment = {
  id: string;
  date: string;
  status: string;
};

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Gán kiểu cho appointments
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadAppointments() {
      try {
        const data: Appointment[] = await fetchDoctorAppointments(); // Đảm bảo API trả về đúng kiểu dữ liệu
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
