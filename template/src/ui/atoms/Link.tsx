import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
} from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { cn } from 'utils';

type LinkVariant = 'anchor' | 'fg' | 'fg-subtle';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant;
};

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LinkVariant;
};

const makeLinkClasses = (variant?: LinkVariant, className?: string) => {
  return cn(
    'outline-none transition-colors duration-100',
    'underline decoration-current/30 underline-offset-4',
    'hover:decoration-current focus-visible:decoration-current',
    {
      'text-sb-anchor hover:text-sb-anchor-active': variant === 'anchor',
      'text-sb-fg hover:text-sb-anchor': variant === 'fg',
      'text-sb-fg-subtle hover:text-sb-fg': variant === 'fg-subtle',
    },
    className,
  );
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, variant = 'anchor', ...rest }, ref) => {
    return (
      <a {...rest} {...{ ref }} className={makeLinkClasses(variant, className)}>
        {children}
      </a>
    );
  },
);

const CreatedLinkComponent = createLink(Link);

export const RouterLink: LinkComponent<typeof Link> = (props) => {
  return (
    <CreatedLinkComponent
      // activeProps={{ 'data-active': true }}
      preload={'intent'}
      {...props}
    />
  );
};

export const LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps>(
  (
    {
      children,
      className,
      type = 'button',
      variant = 'anchor',
      disabled,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        {...rest}
        {...{ ref, type, disabled }}
        className={cn(
          makeLinkClasses(variant, className),
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        {children}
      </button>
    );
  },
);
