import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import NavigationBar from '../components/NavigationBar';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <div className="app">
        <NavigationBar />
        <main className="main-content">
          <Component {...pageProps} />
        </main>
      </div>
    </AuthProvider>
  );
}
