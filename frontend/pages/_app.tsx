import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider, useAuth } from '../context/AuthContext';
import NavigationBar from '../components/NavigationBar';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
}

function MainLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const { role } = useAuth() || { role: 'guest' }; // Default to guest if role is undefined
  return (
    <div className="app">
      <NavigationBar role={role} />
      <main className="main-content">{children}</main>
    </div>
  );
}