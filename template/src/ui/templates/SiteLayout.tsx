import type { ReactNode } from 'react';
import { SiteHeader, SiteFooter } from 'organisms';

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-page flex-col bg-sb-surface px-page-x text-sb-fg">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center py-6 sm:py-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
