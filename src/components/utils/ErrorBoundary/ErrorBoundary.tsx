import { Component } from "react";

interface ErrorBoundaryProps {
  children: any;
  id?: string;
  t?: any;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const COMMON_ERROR_STRING = "Oops, something went wrong here!";

/**
 * Error boundary class. Try/catch for React
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: Error, info: object) {
    this.log(error, info);
  }

  /**
   * Log a React error
   * @param error Error object
   * @param info Error info
   */
  public async log(error: Error, info: object) {
    const { id } = this.props;

    // TODO: send logs to server/logging service
    const log = console.log;

    log(
      `REACT error boundary caught${
        id ? ` (error occurred in the child of ${id} component)` : ""
      }: ${error ? error.message : ""}`,
      "error",
      {
        INFO: JSON.stringify(info).replace(/\\n\s*/g, " "),
        PAGE: window.location.pathname,
      }
    );
  }

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // Fallback UI
      return <h2>{COMMON_ERROR_STRING}</h2>;
    }

    return children;
  }
}

export default ErrorBoundary;
