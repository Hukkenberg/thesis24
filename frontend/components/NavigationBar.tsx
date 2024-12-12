
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">My Modern App</h1>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/">
              <a className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
