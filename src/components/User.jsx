import React from 'react';

export default function User() {
  if (true) {
    throw new Error('Custom Error0');
  }
  return (
    <div>
      <h1>Hello Daya User!</h1>
    </div>
  );
}
