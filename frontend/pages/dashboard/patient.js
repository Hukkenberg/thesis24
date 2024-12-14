import Navbar from "../../components/Navbar";

export default function PatientDashboard() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Thông tin bệnh nhân</h1>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Họ và tên</label>
            <input type="text" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium mb-2">Tuổi</label>
            <input type="number" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-medium mb-2">Giới tính</label>
            <select className="w-full px-4 py-2 border rounded">
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-2">Địa chỉ</label>
            <input type="text" className="w-full px-4 py-2 border rounded" />
          </div>
          <div className="col-span-2 flex justify-end space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Lưu thông tin</button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Hủy thông tin</button>
          </div>
        </form>
      </main>
    </div>
  );
}