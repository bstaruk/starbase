import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-sb-fg-title">Starbase</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="px-6 py-3 bg-sb-action text-white rounded-lg is-active:bg-sb-action-active transition-colors"
      >
        count is {count}
      </button>
      <p className="text-sb-fg-subtle text-sm">
        Edit{' '}
        <code className="font-mono bg-sb-canvas px-1.5 py-0.5 rounded">
          src/App.tsx
        </code>{' '}
        and save to test HMR
      </p>
    </div>
  );
}

export default App;
