interface Admin {
  name: string;
  role: string;
  email: string;
  activeAccounts: number;
}

export default function AdminCard({ admin }: { admin: Admin }) {
  return (
    <div className="card">
      <h2>{admin.name}</h2>
      <p>Role: {admin.role}</p>
      <p>Email: {admin.email}</p>
      <p>Active Accounts Managed: {admin.activeAccounts}</p>
    </div>
  );
}
