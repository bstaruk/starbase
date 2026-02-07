import type { ComponentType, SVGProps } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FeatureCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.4,
              delay: 0.1 + index * 0.06,
              ease: 'easeOut',
            }
      }
      className="rounded-xl border border-sb-divider bg-sb-surface-raised p-5"
    >
      <div className="mb-3 flex items-center gap-3">
        <Icon className="size-5 shrink-0 text-sb-action" aria-hidden="true" />
        <h2 className="text-h5 text-sb-fg-title">{title}</h2>
      </div>
      <p className="text-sm text-sb-fg-subtle">{description}</p>
    </motion.li>
  );
}
