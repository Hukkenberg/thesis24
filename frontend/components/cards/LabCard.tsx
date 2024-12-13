interface LabTest {
  id: number;
  patientId: number;
  testType: string;
  result: string;
  status: string;
}

export default function LabCard({ test }: { test: LabTest }) {
  return (
      <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{test.testType}</h3>
          <p>Status: {test.status}</p>
          <p>Result: {test.result || 'Pending'}</p>
      </div>
  );
}
