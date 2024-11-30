import Link from "next/link";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Hospital Management System</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link href="/doctor">
          <a className="bg-blue-500 text-white px-6 py-4 rounded-md text-center">
            Doctor Dashboard
          </a>
        </Link>
        <Link href="/lab">
          <a className="bg-green-500 text-white px-6 py-4 rounded-md text-center">
            Lab Dashboard
          </a>
        </Link>
        <Link href="/patient">
          <a className="bg-yellow-500 text-white px-6 py-4 rounded-md text-center">
            Patient Dashboard
          </a>
        </Link>
        <Link href="/admin">
          <a className="bg-red-500 text-white px-6 py-4 rounded-md text-center">
            Admin Dashboard
          </a>
        </Link>
      </div>
      <h2>Welcome to the Hospital Management System</h2>
      <p>Select a dashboard to get started.</p>
  </div>
  );
};

export default Home;