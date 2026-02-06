import React from 'react';
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { DarkModeToggle } from 'atoms/DarkModeToggle';
import { Stargazers } from 'atoms/Stargazers';

export interface RouterContext {
  queryClient: QueryClient;
}

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import('@tanstack/react-router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const ReactQueryDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import('@tanstack/react-query-devtools').then((res) => ({
        default: res.ReactQueryDevtools,
      })),
    );

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <footer className="fixed bottom-0 inset-x-0 flex items-center justify-center gap-3 p-4">
        <Stargazers />
        <DarkModeToggle />
      </footer>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
});
