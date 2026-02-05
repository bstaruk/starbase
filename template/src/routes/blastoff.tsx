import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/blastoff')({
  component: Blastoff,
});

function Blastoff() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-sb-fg-title">Blastoff</h1>
      <p className="text-sb-fg-subtle">More details coming soon.</p>
      <Link
        to="/"
        className="text-sb-anchor is-active:text-sb-anchor-active transition-colors text-sm"
      >
        Back to home
      </Link>
    </div>
  );
}
