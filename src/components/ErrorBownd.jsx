import React, { Component } from 'react';
class ErrorBownd extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return (
      <div>
        {this.state.error ? (
          <h1>Custom Page For error Handling.</h1>
        ) : (
          this.props.childrens
        )}
      </div>
    );
  }
}
export default ErrorBownd;
