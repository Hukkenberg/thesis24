export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-white text-2xl font-bold">Hệ thống quản lý</h1>
        <div>
          <a href="/" className="text-white mx-4">Trang chủ</a>
          <a href="/profile/view" className="text-white mx-4">Tài khoản</a>
        </div>
      </div>
    </nav>
  );
}