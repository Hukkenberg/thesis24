
interface Lab {
  name: string;
  location: string;
  testsAvailable: number;
}

export default function LabCard({ lab }: { lab: Lab }) {
  return (
    <div className="bg-purple-50 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-purple-700">{lab.name}</h2>
      <p className="text-gray-600 mt-2">Location: <span className="font-medium">{lab.location}</span></p>
      <p className="text-gray-600">Tests Available: <span className="font-medium">{lab.testsAvailable}</span></p>
    </div>
  );
}
