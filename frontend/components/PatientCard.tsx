const PatientCard = ({ patient }: { patient: { name: string, age: number } }) => (
  <div>
    <h3>{patient.name}</h3>
    <p>Age: {patient.age}</p>
  </div>
);

export default PatientCard;
