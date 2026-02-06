import React from 'react';
import type { QueryClient } from '@tanstack/react-query';
import {
  HeadContent,
  createRootRouteWithContext,
  Outlet,
} from '@tanstack/react-router';
import { DarkModeToggle } from 'molecules/DarkModeToggle';
import { Stargazers } from 'molecules/Stargazers';

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
      <main className="pb-16">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 inset-x-0 flex items-center justify-center gap-3 p-4">
        <Stargazers />
        <DarkModeToggle />
      </footer>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
});
