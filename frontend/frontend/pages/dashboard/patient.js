
export default function PatientDashboard({ appointments, prescriptions }) {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date} - {appointment.status}
          </li>
        ))}
      </ul>
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription.id}>
            {prescription.medicineList} - {prescription.notes || "No notes"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const appointmentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`);
  const appointments = await appointmentsRes.json();

  const prescriptionsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prescriptions`);
  const prescriptions = await prescriptionsRes.json();

  return {
    props: { appointments, prescriptions },
  };
}
