import { motion } from 'motion/react';
import { useLocation } from '@tanstack/react-router';
import { StarbaseLogo } from 'atoms/StarbaseLogo';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        key={pathname}
        initial={{ y: -20, rotate: 12 }}
        animate={{ y: [-20, 4, -2, 0], rotate: 12 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{ rotate: [12, 4, 20, 6, 18, 9, 15, 12] }}
      >
        <StarbaseLogo className="size-12" />
      </motion.div>
      <h1 className="text-sb-fg-title">{title}</h1>
    </div>
  );
}
