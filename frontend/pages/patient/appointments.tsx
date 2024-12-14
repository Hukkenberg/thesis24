
import { useEffect, useState } from 'react';
import { fetchPatientAppointments } from '../../api/patient/appointments';

const PatientAppointments = ({ patientId }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadAppointments() {
      try {
        const data = await fetchPatientAppointments(patientId);
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
