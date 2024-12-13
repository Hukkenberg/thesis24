import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavigationBar from '../components/NavigationBar';
import { createContext, useContext, ReactNode } from 'react';

const AuthContext = createContext({ role: 'patient' });

export function useAuth() {
  return useContext(AuthContext);
}

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthContext.Provider value={{ role: 'patient' }}>
      <div className="app">
        <NavigationBar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </AuthContext.Provider>
  );
}
