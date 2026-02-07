import { RouterLink, StarbaseLogo } from 'atoms';
import { DarkModeToggle } from 'molecules';

const navLinkClasses = 'font-display text-sm font-medium px-0.5';

const activeProps = {
  className: 'text-sb-fg-title',
  'aria-current': 'page' as const,
};

export function SiteHeader() {
  return (
    <header className="flex items-center gap-4 py-3 sm:gap-5">
      <RouterLink
        to="/"
        variant="fg-subtle"
        className={`${navLinkClasses} flex items-center gap-2 font-semibold tracking-tight`}
        activeProps={activeProps}
      >
        <StarbaseLogo className="size-5 shrink-0" />
        Starbase
      </RouterLink>

      <span aria-hidden="true" className="h-4 w-px bg-sb-divider" />

      <nav aria-label="Main" className="flex items-center gap-4 sm:gap-5">
        <RouterLink
          to="/liftoff"
          variant="fg-subtle"
          className={navLinkClasses}
          activeProps={activeProps}
        >
          Liftoff
        </RouterLink>
      </nav>

      <div className="ml-auto">
        <DarkModeToggle />
      </div>
    </header>
  );
}
