import Head from 'next/head';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Healthcare Dashboard</title>
      </Head>
      <div className="dashboard">
        <h1>Welcome to the Healthcare Management System</h1>
        <p>Select an option from the menu to begin.</p>
        <nav className="dashboard-nav">
          <ul>
            <li>
              <Link href="/patients">Quản Lý Bệnh Nhân</Link>
            </li>
            <li>
              <Link href="/info">Thông Tin</Link>
            </li>
            <li>
              <Link href="/process">Quản Lý Tiến Trình</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
