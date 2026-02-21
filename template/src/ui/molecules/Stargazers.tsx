import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LuGithub } from 'react-icons/lu';
import { ButtonLink } from 'atoms';

interface StargazersProps {
  count?: number;
}

export function Stargazers({ count }: StargazersProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ButtonLink
      href="https://github.com/bstaruk/starbase"
      target="_blank"
      rel="noopener noreferrer"
      variant="ghost"
      size="sm"
      className="p-2"
      aria-label={
        count != null
          ? `${count.toLocaleString()} stargazers on GitHub (opens in new tab)`
          : 'Starbase on GitHub (opens in new tab)'
      }
    >
      <AnimatePresence mode="popLayout">
        {count != null && (
          <motion.span
            key="count"
            initial={
              prefersReducedMotion ? false : { opacity: 0, filter: 'blur(4px)' }
            }
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: 'easeOut' }
            }
            className="mr-1 text-xs font-semibold tabular-nums"
          >
            {count.toLocaleString()}
          </motion.span>
        )}
      </AnimatePresence>
      <LuGithub size={16} aria-hidden="true" />
    </ButtonLink>
  );
}
