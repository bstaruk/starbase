import { createFileRoute } from '@tanstack/react-router';
import { PageHeader } from 'molecules';

export const Route = createFileRoute('/liftoff')({
  component: Liftoff,
  head: () => ({
    meta: [{ title: 'Liftoff — Starbase' }],
  }),
});

function Liftoff() {
  return (
    <div className="flex flex-col items-center gap-6">
      <PageHeader title="Liftoff" />
      <p className="text-sb-fg-subtle">More details coming soon.</p>
    </div>
  );
}
