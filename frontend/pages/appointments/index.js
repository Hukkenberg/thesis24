
export default function Appointments({ appointments }) {
  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`);
  const appointments = await res.json();

  return {
    props: { appointments },
  };
}
