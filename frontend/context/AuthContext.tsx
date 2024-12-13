import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
  user: User | null;
  refreshToken: () => Promise<void>;
  setRole: (role: 'patient' | 'doctor' | 'lab' | 'admin') => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<'patient' | 'doctor' | 'lab' | 'admin'>('patient');
  const [user, setUser] = useState<User | null>(null);

  const refreshToken = async () => {
    const response = await fetch('/api/auth/refresh', { method: 'POST' });
    const { accessToken } = await response.json();
    // Store new token logic here
  };

  return (
    <AuthContext.Provider value={{ role, user, refreshToken, setRole, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
