
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hệ thống quản lý bệnh viện</title>
        <meta name="description" content="Hệ thống quản lý thông tin bệnh viện thông minh và tiện lợi." />
        <meta name="keywords" content="quản lý bệnh viện, thông tin bệnh nhân, hệ thống y tế" />
      </Head>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Trang chủ</h1>
        <p>Chào mừng bạn đến với hệ thống quản lý thông tin bệnh viện.</p>
        <div className="mt-4">
          <a href="/login" className="text-blue-500 hover:underline">Đăng nhập</a> để bắt đầu.
        </div>
      </main>
    </div>
  );
}
