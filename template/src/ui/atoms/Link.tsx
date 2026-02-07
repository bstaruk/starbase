import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { cn } from 'utils';

type LinkVariant = 'anchor' | 'fg' | 'fg-subtle';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: LinkVariant;
  ref?: Ref<HTMLAnchorElement>;
};

type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LinkVariant;
  ref?: Ref<HTMLButtonElement>;
};

const makeLinkClasses = (variant?: LinkVariant, className?: string) => {
  return cn(
    'outline-none focus-visible:outline-sb-action motion-safe:transition-colors motion-safe:duration-100',
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

export const Link = ({
  children,
  className,
  variant = 'anchor',
  ref,
  ...rest
}: LinkProps) => {
  return (
    <a {...rest} ref={ref} className={makeLinkClasses(variant, className)}>
      {children}
    </a>
  );
};

const CreatedLinkComponent = createLink(Link);

export const RouterLink: LinkComponent<typeof Link> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};

export const LinkButton = ({
  children,
  className,
  type = 'button',
  variant = 'anchor',
  disabled,
  ref,
  ...rest
}: LinkButtonProps) => {
  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        makeLinkClasses(variant, className),
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
    >
      {children}
    </button>
  );
};
