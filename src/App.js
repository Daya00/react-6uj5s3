import React from 'react';
import './style.css';
import User from './components/User';
import ErrorBownd from './components/ErrorBoundary';

export default function App() {
  return (
    <div>
      <ErrorBownd>
        <User />
      </ErrorBownd>
    </div>
  );
}
