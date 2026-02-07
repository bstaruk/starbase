import type { ReactNode } from 'react';
import { SiteHeader } from 'organisms';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-page flex-col bg-sb-surface px-page-x">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-page-x focus:top-3 focus:z-50 focus:rounded-md focus:bg-sb-surface-raised focus:px-3 focus:py-1.5 focus:text-sm focus:font-medium focus:text-sb-fg focus:shadow-sm focus:ring-1 focus:ring-sb-divider focus:outline-none"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center py-6 sm:py-10"
      >
        {children}
      </main>
    </div>
  );
}
