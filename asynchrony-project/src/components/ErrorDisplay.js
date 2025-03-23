import React from 'react';

// This component displays error messages to the user
function ErrorDisplay({ message }) {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{message}</p>
      <p>Please try again later or contact support if the issue persists.</p>
    </div>
  );
}

export default ErrorDisplay;