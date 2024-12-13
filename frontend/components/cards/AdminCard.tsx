interface Admin {
  id: number;
  name: string;
  role: string;
  email: string;
  activeAccounts: number;
}

export default function AdminCard({ admin }: { admin: Admin }) {
  return (
    <div className="bg-red-50 shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-red-700">{admin.name}</h2>
      <p className="text-gray-600 mt-2">Role: <span className="font-medium">{admin.role}</span></p>
      <p className="text-gray-600">Email: {admin.email}</p>
      <p className="text-gray-600">Active Accounts: {admin.activeAccounts}</p>
    </div>
  );
}
