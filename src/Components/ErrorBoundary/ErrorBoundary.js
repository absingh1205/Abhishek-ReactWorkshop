import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  render() {
    const hasError = !!this.state.error;

    return hasError ? (
      <h1>Error is {this.state.error.message}</h1>
    ) : (
      this.props.children
    );
  }
}
