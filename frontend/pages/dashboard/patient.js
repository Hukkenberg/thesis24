
export default function PatientDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Patient Dashboard</h1>
      <ul>
        <li><a href="/appointments">View Appointments</a></li>
        <li><a href="/reports/chart">View Progress Charts</a></li>
        <li><a href="/patients/manage">Manage Personal Data</a></li>
        <li><a href="/reports">View Medical History</a></li>
      </ul>
    </div>
  );
}
