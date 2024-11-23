export default function AppointmentManager({ appointments }) {
  return (
    <div>
      <h2>Quản lý lịch khám</h2>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Bệnh nhân</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
