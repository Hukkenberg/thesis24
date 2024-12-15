
export default function Prescriptions({ prescriptions }) {
  return (
    <div>
      <h1>Prescriptions</h1>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/prescriptions`);
  const prescriptions = await res.json();

  return {
    props: { prescriptions },
  };
}
