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

// Dynamic route fetching (placeholder logic for demonstration)
export async function getServerSideProps(context) {
  const { id } = context.params;
  return { props: { id } };
}