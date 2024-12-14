import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="p-6">
          <div className="bg-blue-500 text-white p-6 rounded shadow-lg text-center">
            <h1 className="text-3xl font-bold">Hệ thống quản lý</h1>
            <p className="mt-2 text-lg">Nâng cao hiệu quả quản lý thông tin và tiến trình.</p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200">
              Bắt đầu
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <a href="/dashboard/patient" className="card">
              <h2>Quản lý thông tin &rarr;</h2>
              <p>Xử lý và lưu trữ thông tin bệnh nhân.</p>
            </a>
            <a href="/dashboard/doctor" className="card">
              <h2>Quản lý tiến trình &rarr;</h2>
              <p>Theo dõi và quản lý tiến trình điều trị.</p>
            </a>
            <a href="/tools" className="card">
              <h2>Công cụ &rarr;</h2>
              <p>Công cụ hỗ trợ các hoạt động quản lý.</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}