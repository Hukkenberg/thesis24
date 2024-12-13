import React, { useEffect, useState } from 'react';
import AdminCard from '../cards/AdminCard';

interface Admin {
  id: number;
  name: string;
  role: string;
  email: string;
}

export default function AdminList() {
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    fetch('/api/admin/users')
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error('Error fetching admins:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {admins.map((admin) => (
        <AdminCard key={admin.id} admin={admin} />
      ))}
    </div>
  );
}
