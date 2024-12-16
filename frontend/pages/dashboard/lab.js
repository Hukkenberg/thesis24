
export default function LabDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lab Staff Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={cardStyle}><a href="/reports">Manage Lab Reports</a></div>
        <div style={cardStyle}><a href="/appointments">View Scheduled Tests</a></div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#fff2e6',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  fontSize: '1.2rem',
};
