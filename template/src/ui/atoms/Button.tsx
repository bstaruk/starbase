import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { cn } from 'utils';

export type ButtonVariant = 'anchor' | 'outline' | 'ghost';

type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  ref?: React.Ref<HTMLButtonElement>;
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  ref?: React.Ref<HTMLAnchorElement>;
}

const makeButtonClasses = (
  variant?: ButtonVariant,
  size: ButtonSize = 'md',
  className?: string,
) =>
  cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-sans font-semibold rounded-md border border-transparent outline-none focus-visible:outline-sb-action cursor-pointer',
    'motion-safe:transition-all motion-safe:duration-150 ease-out',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
    {
      /* Size variants */
      'text-sm px-3 py-1.5': size === 'sm',
      'text-base px-4 py-2': size === 'md',
      'text-lg px-5 py-2.5': size === 'lg',

      /* Variant: anchor */
      'bg-sb-anchor border-sb-anchor text-sb-surface-raised shadow-sm is-active:bg-sb-anchor-active is-active:border-sb-anchor-active is-active:shadow-md':
        variant === 'anchor',

      /* Variant: outline */
      'bg-transparent border-sb-divider text-sb-fg is-active:bg-sb-canvas is-active:border-sb-fg-subtle/30':
        variant === 'outline',

      /* Variant: ghost */
      'bg-transparent text-sb-fg is-active:bg-sb-fg/5': variant === 'ghost',
    },
    className,
  );

export const ButtonLink = ({
  children,
  className,
  variant = 'anchor',
  size,
  ref,
  ...rest
}: ButtonLinkProps) => {
  return (
    <a
      {...rest}
      ref={ref}
      className={makeButtonClasses(variant, size, className)}
    >
      {children}
    </a>
  );
};

export const Button = ({
  children,
  className,
  variant = 'anchor',
  size,
  type = 'button',
  ref,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      ref={ref}
      type={type}
      className={makeButtonClasses(variant, size, className)}
    >
      {children}
    </button>
  );
};

const CreatedLinkComponent = createLink(ButtonLink);

export const RouterButtonLink: LinkComponent<typeof ButtonLink> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};
