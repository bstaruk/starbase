import { createFileRoute } from '@tanstack/react-router';
import { RouterLink } from 'atoms/Link';

export const Route = createFileRoute('/blastoff')({
  component: Blastoff,
});

function Blastoff() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-sb-fg-title">Blastoff</h1>
      <p className="text-sb-fg-subtle">More details coming soon.</p>
      <RouterLink to="/" className="text-sm">
        Back to home
      </RouterLink>
    </div>
  );
}
