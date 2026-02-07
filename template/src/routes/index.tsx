import { createFileRoute } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'motion/react';
import { Code, StarbaseLogo } from 'atoms';

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({
    meta: [{ title: 'Starbase' }],
  }),
});

function Index() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={prefersReducedMotion ? false : { y: -20, rotate: 12 }}
            animate={{ y: 0, rotate: [16, 8, 14, 10, 12] }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: 'easeOut' }
            }
            whileHover={
              prefersReducedMotion
                ? undefined
                : { rotate: [12, 4, 20, 6, 18, 9, 15, 12] }
            }
          >
            <StarbaseLogo className="size-12" />
          </motion.div>
          <h1 className="text-sb-fg-title">Starbase</h1>
        </div>
        <p className="text-sb-fg-subtle max-w-md text-center text-balance">
          A Claude-ready launchpad for modern React apps, built on Vite,
          TypeScript, Tailwind CSS, and TanStack.
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="font-display text-h5 font-medium text-sb-fg">
          Start your mission today:
        </p>
        <Code>npm create starbase@latest</Code>
      </div>
    </div>
  );
}
