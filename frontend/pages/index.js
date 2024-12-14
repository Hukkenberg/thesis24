import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Trang chủ</h1>
        <p>Chào mừng bạn đến với hệ thống quản lý thông tin bệnh viện.</p>
      </main>
    </div>
  );
}