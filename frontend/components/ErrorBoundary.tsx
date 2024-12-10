// frontend/components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';
import styles from '../styles/ErrorBoundary.module.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError)
      return <div className={styles.error}>Oops! Something went wrong. Please try again later.</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
