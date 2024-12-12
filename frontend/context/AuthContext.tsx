import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
  user: User | null;
  setRole: (role: 'patient' | 'doctor' | 'lab' | 'admin') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<'patient' | 'doctor' | 'lab' | 'admin'>('patient');
  const [user, setUser] = useState<User | null>({ name: 'John Doe', email: 'johndoe@example.com' });

  const logout = () => {
    setUser(null);
    setRole('patient'); // Reset role to default after logout
  };

  return (
    <AuthContext.Provider value={{ role, user, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
