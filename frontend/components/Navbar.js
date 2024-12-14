
import Link from "next/link";
import React from "react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/dashboard/patient", label: "Quản lý thông tin" },
  { href: "/dashboard/doctor", label: "Quản lý tiến trình" },
  { href: "/dashboard/admin", label: "Quản trị hệ thống" },
  { href: "/profile/view", label: "Tài khoản" },
];

function Navbar() {
  return (
    <nav className="navbar bg-blue-500 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Hệ thống quản lý</h1>
        <ul className="flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <a className="hover:underline">{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
