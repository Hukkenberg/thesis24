import { useRouter } from "next/router";

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const patient = {
    id,
    name: "John Doe",
    dob: "1980-01-01",
    diagnosis: "Hypertension",
    treatment: "Medication A",
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <div className="p-4 bg-gray-100 rounded-md">
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>DOB:</strong> {patient.dob}</p>
        <p><strong>Diagnosis:</strong> {patient.diagnosis}</p>
        <p><strong>Treatment:</strong> {patient.treatment}</p>
      </div>
    </div>
  );
};

export default PatientDetails;