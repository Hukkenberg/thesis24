export default function Navbar() {
  return (
    <nav className="navbar bg-blue-500 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Hệ thống quản lý</h1>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:underline">Trang chủ</a></li>
          <li><a href="/dashboard/patient" className="hover:underline">Quản lý thông tin</a></li>
          <li><a href="/dashboard/doctor" className="hover:underline">Quản lý tiến trình</a></li>
          <li><a href="/dashboard/admin" className="hover:underline">Quản trị hệ thống</a></li>
          <li><a href="/profile/view" className="hover:underline">Tài khoản</a></li>
        </ul>
      </div>
    </nav>
  );
}