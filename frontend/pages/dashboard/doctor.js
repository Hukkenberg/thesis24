
export default function DoctorDashboard() {
export default function DoctorDashboard() {
  return (
    <div style={{ padding: '2rem' }}>
    <div style={{ padding: '2rem' }}>
      <h1>Doctor Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={cardStyle}><a href="/patients">Manage Patients</a></div>
        <div style={cardStyle}><a href="/appointments">View Appointments</a></div>
        <div style={cardStyle}><a href="/reports/chart">Progress Charts</a></div>
        <div style={cardStyle}><a href="/prescriptions">Manage Prescriptions</a></div>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '8px',
  boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  fontSize: '1.2rem',
};
