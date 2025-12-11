import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-md">
              <h2 className="mb-4" style={{ fontFamily: 'Roboto' }}>
                Something went wrong
              </h2>
              <p className="text-sm opacity-60 mb-6" style={{ fontFamily: 'Roboto' }}>
                Please refresh the page to continue.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-black text-white text-sm tracking-wider hover:bg-black/90 transition-colors"
                style={{ fontFamily: 'Roboto' }}
              >
                REFRESH PAGE
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}