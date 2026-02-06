import { createFileRoute } from '@tanstack/react-router';
import { RouterLink } from 'atoms/Link';
import { PageHeader } from 'molecules/PageHeader';

export const Route = createFileRoute('/liftoff')({
  component: Liftoff,
});

function Liftoff() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <PageHeader title="Liftoff" />
      <p className="text-sb-fg-subtle">More details coming soon.</p>
      <RouterLink to="/" className="text-sm">
        Back to home
      </RouterLink>
    </div>
  );
}
