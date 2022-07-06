import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { error: false };
  }
  componentDidCatch(errorObj) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error)
      return <p>Something went wrong... production error only</p>;
    return this.props.children;
  }
}
export default ErrorBoundary;
