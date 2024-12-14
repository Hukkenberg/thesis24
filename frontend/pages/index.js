import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between bg-blue-500 text-white p-6 rounded shadow">
        <div>
          <h1 className="text-4xl font-bold">Hệ thống quản lý</h1>
          <p className="mt-2 text-lg">Nâng cao hiệu quả quản lý thông tin và tiến trình.</p>
          <Link href="/manage-info">
            <a className="mt-4 inline-block bg-white text-blue-500 font-medium px-6 py-3 rounded hover:bg-gray-100">
              Bắt đầu
            </a>
          </Link>
        </div>
        <div className="relative w-64 h-64">
          <Image
            src="/images/management.png"
            alt="Management Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow hover:shadow-md">
          <h2 className="text-xl font-bold">Quản lý thông tin</h2>
          <p className="mt-2">Xử lý và lưu trữ thông tin bệnh nhân.</p>
          <Link href="/manage-info">
            <a className="text-blue-500 mt-4 block">Xem chi tiết</a>
          </Link>
        </div>
        <div className="p-4 bg-white rounded shadow hover:shadow-md">
          <h2 className="text-xl font-bold">Quản lý tiến trình</h2>
          <p className="mt-2">Theo dõi và quản lý tiến trình điều trị.</p>
          <Link href="/manage-progress">
            <a className="text-blue-500 mt-4 block">Xem chi tiết</a>
          </Link>
        </div>
        <div className="p-4 bg-white rounded shadow hover:shadow-md">
          <h2 className="text-xl font-bold">Công cụ</h2>
          <p className="mt-2">Công cụ hỗ trợ các hoạt động quản lý.</p>
          <Link href="/manage-tools">
            <a className="text-blue-500 mt-4 block">Xem chi tiết</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
