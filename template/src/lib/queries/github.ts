import { queryOptions } from '@tanstack/react-query';

export function starbaseRepoQueryOptions() {
  return queryOptions({
    queryKey: ['github', 'repos', 'bstaruk', 'starbase'],
    queryFn: async () => {
      const res = await fetch('https://api.github.com/repos/bstaruk/starbase');
      if (!res.ok) throw new Error('Failed to fetch repo data');
      return res.json() as Promise<{ stargazers_count: number }>;
    },
    staleTime: 5 * 60 * 1000,
  });
}
