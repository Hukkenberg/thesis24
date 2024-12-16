
export default function PatientDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Patient Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={cardStyle}><a href="/appointments">View Appointments</a></div>
        <div style={cardStyle}><a href="/reports/chart">View Progress Charts</a></div>
        <div style={cardStyle}><a href="/patients/manage">Manage Personal Data</a></div>
        <div style={cardStyle}><a href="/reports">View Medical History</a></div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#e6f7ff',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  fontSize: '1.2rem',
};
