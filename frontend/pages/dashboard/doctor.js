
export default function DoctorDashboard({ patients }) {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.contactNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patients`);
  const patients = await res.json();

  return {
    props: { patients },
  };
}
