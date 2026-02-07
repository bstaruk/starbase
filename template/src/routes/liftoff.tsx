import { createFileRoute } from '@tanstack/react-router';
import {
  LuAtom,
  LuContrast,
  LuLayers,
  LuPaintbrush,
  LuRocket,
  LuRoute,
  LuSearch,
  LuSparkles,
  LuSquareActivity,
} from 'react-icons/lu';
import { Link } from 'atoms';
import { FeatureCard } from 'molecules';

export const Route = createFileRoute('/liftoff')({
  component: Liftoff,
  head: () => ({
    meta: [
      { title: "What's On Board | starbase.dev" },
      {
        name: 'description',
        content:
          "What's included in Starbase: Claude Code integration, React 19, TanStack Router & Query, Tailwind CSS, dark mode theming, atomic design, and AA 2.2 a11y.",
      },
    ],
  }),
});

const features = [
  {
    icon: LuSparkles,
    title: 'Claude Code',
    description:
      'Ships with CLAUDE.md conventions, project memory, and custom commands. Ready for AI-assisted development from the start.',
  },
  {
    icon: LuAtom,
    title: 'React 19 + Vite',
    description:
      'Latest React with Vite for instant HMR, fast builds, and a modern developer experience.',
  },
  {
    icon: LuRoute,
    title: 'TanStack Router',
    description:
      'File-based routing with type-safe navigation, preloading on intent, and automatic code splitting.',
  },
  {
    icon: LuSquareActivity,
    title: 'TanStack Query',
    description:
      'Declarative data fetching with caching, background updates, and stale-while-revalidate. See the stargazer count above for a live example.',
  },
  {
    icon: LuPaintbrush,
    title: 'Tailwind CSS',
    description:
      'Utility-first styling with custom theme tokens, responsive typography, and a semantic color system.',
  },
  {
    icon: LuContrast,
    title: 'Theming',
    description:
      'Dark and light modes with semantic color tokens, system preference detection, and zero-flash on load.',
  },
  {
    icon: LuLayers,
    title: 'Atomic Design',
    description:
      'Components organized as atoms, molecules, organisms, and templates, scaling from buttons to full page layouts.',
  },
  {
    icon: LuSearch,
    title: 'Accessibility',
    description:
      'WCAG 2.2 AA baseline with semantic HTML, keyboard navigation, focus indicators, and skip-to-content.',
  },
] as const;

function Liftoff() {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-10 sm:gap-14">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-sb-fg-title">
          Ready for liftoff!{' '}
          <LuRocket
            className="inline size-[1em] align-middle"
            aria-hidden="true"
          />
        </h1>
        <p className="max-w-lg text-center text-balance text-sb-fg-subtle">
          An opinionated React starter, built with Claude Code in mind. Just
          enough structure to ship fast without starting from scratch.
        </p>
      </div>

      <h2 className="sr-only">Features</h2>
      <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} index={i} {...feature} />
        ))}
      </ul>

      <p className="pb-4 text-center text-sm text-sb-fg-subtle">
        Full documentation and source on{' '}
        <Link
          href="https://github.com/bstaruk/starbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span className="sr-only"> (opens in new tab)</span>
        </Link>
      </p>
    </div>
  );
}
