import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
  setRole: (role: 'patient' | 'doctor' | 'lab' | 'admin') => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<'patient' | 'doctor' | 'lab' | 'admin'>('patient');
  return <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
