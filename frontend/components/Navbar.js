export default function Navbar({ onLogout }) {
  return (
    <nav>
      <h1>Hệ thống quản lý</h1>
      <button onClick={onLogout}>Đăng xuất</button>
    </nav>
  );
}
