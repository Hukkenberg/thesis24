export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản trị hệ thống</h1>
      <p>Chức năng này cho phép quản trị viên thực hiện các nhiệm vụ quản lý quan trọng:</p>
      <ul className="list-disc pl-6">
        <li>Quản lý thông tin người dùng (bệnh nhân, bác sĩ).</li>
        <li>Phân quyền và kiểm soát truy cập.</li>
        <li>Giám sát và thống kê hoạt động của hệ thống.</li>
        <li>Quản lý tài nguyên bệnh viện như thuốc, vật tư.</li>
      </ul>
    </div>
  );
}