
import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/patients">Quản lý Bệnh Nhân</a></li>
          <li><a href="/process">Quản lý Tiến Trình</a></li>
          <li><a href="/inventory">Quản lý Kho</a></li>
        </ul>
        <div className="account">
          <button className="account-btn">Tài khoản ▼</button>
          <ul className="dropdown">
            <li><a href="/login">Đăng nhập</a></li>
            <li><a href="/logout" onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }}>Đăng xuất</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
