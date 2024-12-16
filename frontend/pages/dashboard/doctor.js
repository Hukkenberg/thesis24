
export default function DoctorDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Doctor Dashboard</h1>
      <ul>
        <li><a href="/patients">Manage Patients</a></li>
        <li><a href="/appointments">View Appointments</a></li>
        <li><a href="/reports/chart">Progress Charts</a></li>
        <li><a href="/prescriptions">Manage Prescriptions</a></li>
      </ul>
    </div>
  );
}
