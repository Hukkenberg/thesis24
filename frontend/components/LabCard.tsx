interface LabTest {
  type: string;
  patient: string;
  status: string;
}

export default function LabCard({ labTest }: { labTest: LabTest }) {
  return (
    <div className="card">
      <h2>{labTest.type}</h2>
      <p>Patient: {labTest.patient}</p>
      <p>Status: {labTest.status}</p>
    </div>
  );
}
