interface NavigationBarProps {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
}

const NavigationBar = ({ role }: NavigationBarProps) => {
  const links = {
    patient: [
      { href: '/', label: 'Home' },
      { href: '/appointments', label: 'Appointments' },
    ],
    doctor: [
      { href: '/', label: 'Dashboard' },
      { href: '/patients', label: 'Patients' },
    ],
    lab: [
      { href: '/', label: 'Tests' },
      { href: '/reports', label: 'Reports' },
    ],
    admin: [
      { href: '/', label: 'Admin Panel' },
      { href: '/users', label: 'Users' },
    ],
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600">My Modern App</h1>
          </div>
          <div className="flex space-x-4 items-center">
            {links[role].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
