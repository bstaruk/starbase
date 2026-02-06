import { createFileRoute } from '@tanstack/react-router';
import { Code } from 'atoms/Code';
import { RouterLink } from 'atoms/Link';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-sb-fg-title">Starbase</h1>
      <p className="text-sb-fg-subtle max-w-md text-center text-balance">
        A modern React starter powered by Vite, TypeScript, Tailwind CSS,
        TanStack Router, and TanStack Query. Scaffold a new project by running
        the command below.
      </p>
      <Code>npm create starbase@latest</Code>
      <RouterLink to="/liftoff" className="text-sm">
        Ready for liftoff?
      </RouterLink>
    </div>
  );
}
