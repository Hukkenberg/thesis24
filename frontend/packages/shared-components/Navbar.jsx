
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li><Link to="/patients">Danh sách bệnh nhân</Link></li>
          <li><Link to="/appointments">Quản lý cuộc hẹn</Link></li>
          <li><Link to="/active-visits">Xét nghiệm</Link></li>
        </ul>
        <div className="account">
          <button className="account-btn">Tài khoản ▼</button>
          <ul className="dropdown">
            <li><Link to="/login">Đăng nhập</Link></li>
            <li><button onClick={() => { localStorage.removeItem('token'); window.location.href = '/'; }}>Đăng xuất</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
