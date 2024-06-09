import React, { useEffect } from 'react';

export default function Test() {
  useEffect(() => {
    console.log('Test component mounted');
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}