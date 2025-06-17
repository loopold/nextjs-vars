'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [env, setEnv] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__ENV__) {
      setEnv(window.__ENV__);
    }
  }, []);

  return (
    <main>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(env, null, 2)}</pre>
    </main>
  );
}
