import React from 'react';
import type { QueryClient } from '@tanstack/react-query';
import {
  HeadContent,
  createRootRouteWithContext,
  Outlet,
} from '@tanstack/react-router';
import { DarkModeToggle, Stargazers } from 'molecules';

export interface RouterContext {
  queryClient: QueryClient;
}

const devtools =
  !import.meta.env.PROD && import.meta.env.VITE_DEVTOOLS === 'true';

const TanStackRouterDevtools = devtools
  ? React.lazy(() =>
      import('@tanstack/react-router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )
  : () => null;

const ReactQueryDevtools = devtools
  ? React.lazy(() =>
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
      })),
    )
  : () => null;

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <HeadContent />
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
        <Outlet />
        <footer className="flex items-center gap-3">
          <Stargazers />
          <DarkModeToggle />
        </footer>
      </main>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
});
