import Navbar from "../../../components/Navbar";

export default function PatientDetails({ id }) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Thông tin chi tiết bệnh nhân</h1>
        <p>Chi tiết bệnh nhân ID: {id}</p>
        {/* Additional detailed fields here */}
      </main>
    </div>
  );
}

// Pre-render paths for dynamic routes
export async function getStaticPaths() {
  const patients = await fetch(`${API_BASE_URL}/api/patient/${params.id}`); // Replace with actual API
  const paths = patients.map((patient) => ({
    params: { id: patient.id.toString() }
  }));

  return { paths, fallback: false }; // No fallback for invalid paths
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await fetch(`${API_BASE_URL}/api/patient/${params.id}`); // Replace with actual API
  const patient = await data.json();

  return {
    props: {
      id: patient.id
    }
  };
}
