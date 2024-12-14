import React, { useState } from 'react';

const ManageAccounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: 'Admin A', role: 'admin' },
    { id: 2, name: 'Doctor B', role: 'doctor' },
    { id: 3, name: 'Lab C', role: 'lab' },
  ]);

  return (
    <div>
      <h1>Quản lý tài khoản</h1>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Tên</th>
            <th className="border border-gray-300 px-4 py-2">Vai trò</th>
            <th className="border border-gray-300 px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="border border-gray-300 px-4 py-2">{account.id}</td>
              <td className="border border-gray-300 px-4 py-2">{account.name}</td>
              <td className="border border-gray-300 px-4 py-2">{account.role}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">Sửa</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAccounts;