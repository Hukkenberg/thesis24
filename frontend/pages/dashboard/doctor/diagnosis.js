import Navbar from "../../../components/Navbar";

export default function DoctorDiagnosis() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Chẩn đoán</h1>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium mb-2">Chẩn đoán</label>
            <textarea className="w-full px-4 py-2 border rounded" rows="5"></textarea>
          </div>
          <div>
            <label className="block font-medium mb-2">Đơn thuốc</label>
            <textarea className="w-full px-4 py-2 border rounded" rows="5"></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Lưu thông tin</button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded">Hủy thông tin</button>
          </div>
        </form>
      </main>
    </div>
  );
}