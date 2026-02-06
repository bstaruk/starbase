import { useQuery } from '@tanstack/react-query';
import { starbaseRepoQueryOptions } from '../../lib/queries/github';
import { Link } from 'atoms/Link';

export function Stargazers() {
  const { data } = useQuery({
    ...starbaseRepoQueryOptions(),
    retry: false,
  });

  return (
    <Link
      href="https://github.com/bstaruk/starbase"
      target="_blank"
      variant="fg-subtle"
    >
      {data
        ? `${data.stargazers_count.toLocaleString()} stargazers on GitHub`
        : 'find us on GitHub'}
    </Link>
  );
}
