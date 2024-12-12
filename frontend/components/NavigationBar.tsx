
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const NavigationBar = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="hover:text-blue-400 px-3 py-2 text-sm font-medium">Trang chủ</a>
            </Link>
            <Link href="/manage-info">
              <a className="hover:text-blue-400 px-3 py-2 text-sm font-medium">Quản lý thông tin</a>
            </Link>
            <Link href="/manage-progress">
              <a className="hover:text-blue-400 px-3 py-2 text-sm font-medium">Quản lý tiến trình</a>
            </Link>
            <Link href="/manage-tools">
              <a className="hover:text-blue-400 px-3 py-2 text-sm font-medium">Công cụ</a>
            </Link>
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-blue-400 px-3 py-2 text-sm font-medium"
            >
              Tài khoản
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-lg">
                {user ? (
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                  >
                    Đăng xuất
                  </button>
                ) : (
                  <Link href="/login">
                    <a className="block px-4 py-2 text-sm hover:bg-gray-100">Đăng nhập</a>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
