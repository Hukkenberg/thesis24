import '../styles/globals.css';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';

const App = ({ Component, pageProps }: any) => (
  <Provider store={store}>
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  </Provider>
);

export default App;
