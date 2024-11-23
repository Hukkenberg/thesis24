export default function AppointmentView({ appointments }) {
  return (
    <div>
      <h2>Lịch khám</h2>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Bác sĩ</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
