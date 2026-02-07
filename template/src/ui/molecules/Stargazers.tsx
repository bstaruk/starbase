import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { LuGithub } from 'react-icons/lu';
import { github } from 'queries';
import { ButtonLink } from 'atoms';

export function Stargazers() {
  const { data } = useQuery({
    ...github.starbaseRepoQueryOptions(),
    retry: false,
  });
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
        data
          ? `${data.stargazers_count.toLocaleString()} stargazers on GitHub (opens in new tab)`
          : 'Starbase on GitHub (opens in new tab)'
      }
    >
      <AnimatePresence mode="popLayout">
        {data && (
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
            {data.stargazers_count.toLocaleString()}
          </motion.span>
        )}
      </AnimatePresence>
      <LuGithub size={16} />
    </ButtonLink>
  );
}
