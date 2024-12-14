
import { useEffect, useState } from 'react';
import { fetchPatientAppointments } from '../../api/patient/appointments';

// Định nghĩa kiểu dữ liệu cho một cuộc hẹn
type Appointment = {
  id: string;
  date: string;
  status: string;
};

// Định nghĩa kiểu cho props của component
type PatientAppointmentsProps = {
  patientId: string; // Kiểu của patientId
};

const PatientAppointments = ({ patientId }: PatientAppointmentsProps) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]); // Gán kiểu cho appointments
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadAppointments() {
      try {
        const data: Appointment[] = await fetchPatientAppointments(patientId); // Đảm bảo API trả về đúng kiểu dữ liệu
        setAppointments(data);
      } catch (err) {
        setError('Không thể tải danh sách cuộc hẹn của bệnh nhân');
      } finally {
        setLoading(false);
      }
    }

    loadAppointments();
  }, [patientId]);

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Cuộc hẹn của bệnh nhân</h1>
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

export default PatientAppointments;
