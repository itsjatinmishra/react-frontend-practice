import { Component, type ErrorInfo } from "react";

export default class ClassErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error + "  " + errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          {" "}
          <h1>Something went wrong</h1>
        </>
      );
    }
    return this.props.children;
  }
}
