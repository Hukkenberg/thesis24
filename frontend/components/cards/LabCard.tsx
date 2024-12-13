interface LabTest {
  id: number;
  testType: string;
  result: string;
  status: string;
}

export default function LabCard({ test }: { test: LabTest }) {
  return (
    <div className="bg-yellow-50 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-yellow-700">{test.testType}</h2>
      <p className="text-gray-600 mt-2">Status: {test.status}</p>
      <p className="text-gray-600">Result: {test.result || 'Pending'}</p>
    </div>
  );
}
