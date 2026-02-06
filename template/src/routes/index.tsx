import { createFileRoute } from '@tanstack/react-router';
import { Code } from 'atoms/Code';
import { RouterLink } from 'atoms/Link';
import { PageHeader } from 'molecules/PageHeader';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <PageHeader title="Starbase" />
      <p className="text-sb-fg-subtle max-w-md text-center text-balance">
        A launchpad for modern React apps, built on Vite, TypeScript, Tailwind
        CSS, TanStack Router, and TanStack Query. Start your mission today:
      </p>

      <Code>npm create starbase@latest</Code>

      <RouterLink to="/liftoff" className="text-sm">
        Ready for liftoff?
      </RouterLink>
    </div>
  );
}
