import { useQuery } from '@tanstack/react-query';
import { github } from 'queries';
import { Link } from 'atoms';

export function Stargazers() {
  const { data } = useQuery({
    ...github.starbaseRepoQueryOptions(),
    retry: false,
  });

  return (
    <Link
      href="https://github.com/bstaruk/starbase"
      target="_blank"
      rel="noopener noreferrer"
      variant="fg-subtle"
    >
      {data
        ? `${data.stargazers_count.toLocaleString()} stargazers on GitHub`
        : 'find us on GitHub'}
      <span className="sr-only"> (opens in new tab)</span>
    </Link>
  );
}
