import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setRole: (role: 'patient' | 'doctor' | 'lab' | 'admin') => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<'patient' | 'doctor' | 'lab' | 'admin'>('patient');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const { token, user: userData } = data.data;

      localStorage.setItem('authToken', token);
      setUser(userData);
      setRole(userData.role);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setRole('patient');
    setIsAuthenticated(false);
  };

  // Refresh token function
  const refreshToken = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      const newToken = data.data.token;

      localStorage.setItem('authToken', newToken);
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
    }
  };

  // Load user from local storage on mount
  useEffect(() => {
    const loadUserFromToken = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) return;

      try {
        const response = await fetch('/api/auth/validate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error('Token validation failed');
        }

        const data = await response.json();
        const { user: userData } = data.data;

        setUser(userData);
        setRole(userData.role);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('User validation failed:', error);
        logout();
      }
    };

    loadUserFromToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        role,
        user,
        isAuthenticated,
        login,
        logout,
        refreshToken,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
