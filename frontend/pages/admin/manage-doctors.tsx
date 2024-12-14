import React, { useState } from 'react';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Doctor A', specialization: 'Cardiology' },
    { id: 2, name: 'Doctor B', specialization: 'Neurology' },
  ]);

  return (
    <div>
      <h1>Quản lý bác sĩ</h1>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Tên</th>
            <th className="border border-gray-300 px-4 py-2">Chuyên môn</th>
            <th className="border border-gray-300 px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="border border-gray-300 px-4 py-2">{doctor.id}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.name}</td>
              <td className="border border-gray-300 px-4 py-2">{doctor.specialization}</td>
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

export default ManageDoctors;