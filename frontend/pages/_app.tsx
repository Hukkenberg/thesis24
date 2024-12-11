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

function MainLayout({ children }: { children: React.ReactNode }) {
  const { role } = useAuth();
  return (
    <div className="app">
      <NavigationBar role={role} />
      <main className="main-content">{children}</main>
    </div>
  );
}
