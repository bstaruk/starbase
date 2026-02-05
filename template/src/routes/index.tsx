import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-sb-fg-title">Starbase</h1>
      <p className="text-sb-fg-subtle">Get started in seconds.</p>
      <code className="font-mono bg-sb-canvas text-sb-fg px-4 py-2 rounded-lg">
        npm create starbase@latest
      </code>
      <Link
        to="/blastoff"
        className="text-sb-anchor is-active:text-sb-anchor-active transition-colors text-sm"
      >
        Learn more
      </Link>
    </div>
  );
}
