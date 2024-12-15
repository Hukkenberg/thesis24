
export default function LabDashboard({ reports }) {
  return (
    <div>
      <h1>Lab Dashboard</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            {report.title} - {report.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports`);
  const reports = await res.json();

  return {
    props: { reports },
  };
}
