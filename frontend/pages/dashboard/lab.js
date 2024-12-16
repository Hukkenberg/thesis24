
export default function LabDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lab Staff Dashboard</h1>
      <ul>
        <li><a href="/reports">Manage Lab Reports</a></li>
        <li><a href="/appointments">View Scheduled Tests</a></li>
      </ul>
    </div>
  );
}
