import { useLocation } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'motion/react';
import { StarbaseLogo } from 'atoms';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <header className="flex flex-col items-center gap-4">
      <motion.div
        key={pathname}
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
      <h1 className="text-sb-fg-title">{title}</h1>
    </header>
  );
}
