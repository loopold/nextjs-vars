"use client";

import { useEffect, useState } from 'react';

export default function Hello() {
  const [resultFromRouteHandler, setResultFromRouteHandler] = useState('');

  useEffect(() => {
    const getResult = async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setResultFromRouteHandler(data.message);
    };

    getResult();
  }, []);
    
  return (
    <div>
      <h1>Hello Next.js! from client component</h1>
      <p>Result from route handler: {resultFromRouteHandler}</p>
    </div>
  );
}
