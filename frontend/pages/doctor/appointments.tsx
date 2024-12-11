import { useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  status: string;
}

export default function Appointments(): JSX.Element {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, patientName: 'Nguyễn Văn A', date: '2024-12-15', status: 'Chờ khám' },
    { id: 2, patientName: 'Trần Thị B', date: '2024-12-20', status: 'Hoàn tất' },
  ]);

  return (
    <div>
      <h1>Quản lý lịch hẹn</h1>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.patientName} - Ngày: {appt.date} - Trạng thái: {appt.status}
            <button onClick={() => alert(`Xử lý lịch hẹn: ${appt.patientName}`)}>Xử lý</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
