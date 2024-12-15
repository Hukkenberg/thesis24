
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <ul className="nav-links">
          <li><Link to="/patients">Danh Sách Bệnh Nhân</Link></li>
          <li><Link to="/appointments">Quản Lý Cuộc Hẹn</Link></li>
          <li><Link to="/visits">Quản Lý Xét Nghiệm</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
