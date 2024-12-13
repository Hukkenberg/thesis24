import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
    role: 'patient' | 'doctor' | 'lab' | 'admin';
    user: User | null;
    refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [role, setRole] = useState<'patient' | 'doctor' | 'lab' | 'admin'>('patient');

    const refreshToken = async () => {
        const response = await fetch('/api/auth/refresh', { method: 'POST' });
        const { accessToken } = await response.json();
        // Store new token and update state
    };

    return (
        <AuthContext.Provider value={{ role, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
}
