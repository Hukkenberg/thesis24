
import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <nav style={{ backgroundColor: '#000', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <a href="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Trang chủ</a>
          <a href="/info" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Quản lý thông tin</a>
          <a href="/exam" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Quản lý kiểm trình</a>
          <a href="/tools" style={{ color: '#fff', textDecoration: 'none' }}>Công cụ</a>
        </div>
        <div>Tài khoản</div>
      </nav>
      <div style={{ backgroundColor: '#3388ff', padding: '40px 20px', textAlign: 'center', color: '#fff' }}>
        <h1>Hệ thống quản lý</h1>
        <p>Nâng cao hiệu quả quản lý hệ thống và kiểm trình</p>
        <button style={{ backgroundColor: '#fff', border: 'none', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Xem thêm
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '40px 20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flex: '1', margin: '10px' }}>
          <h3>Quản lý thông tin</h3>
          <p>Xem và quản lý thông tin chi tiết cá nhân.</p>
          <a href="/info" style={{ color: '#3388ff', textDecoration: 'none' }}>Xem chi tiết</a>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flex: '1', margin: '10px' }}>
          <h3>Quản lý kiểm trình</h3>
          <p>Theo dõi các bài kiểm tra trình độ.</p>
          <a href="/exam" style={{ color: '#3388ff', textDecoration: 'none' }}>Xem chi tiết</a>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', flex: '1', margin: '10px' }}>
          <h3>Công cụ</h3>
          <p>Cung cấp tiện ích hỗ trợ công việc của bạn.</p>
          <a href="/tools" style={{ color: '#3388ff', textDecoration: 'none' }}>Xem chi tiết</a>
        </div>
      </div>
    </div>
  );
}
