import * as React from 'react';
import { createLink, type LinkComponent } from '@tanstack/react-router';
import { cn } from 'utils';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';

type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  iconOnly?: boolean;
  size?: ButtonSize;
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  iconOnly?: boolean;
  size?: ButtonSize;
}

const makeButtonClasses = (
  variant?: ButtonVariant,
  iconOnly?: boolean,
  size: ButtonSize = 'md',
  className?: string,
) =>
  cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-sans font-semibold rounded-md border border-transparent outline-none cursor-pointer',
    'transition-all duration-150 ease-out',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none',
    {
      /* iconOnly sizes (square buttons) */
      'shrink-0 p-0 size-8': iconOnly && size === 'sm',
      'shrink-0 p-0 size-9': iconOnly && size === 'md',
      'shrink-0 p-0 size-11 rounded-lg': iconOnly && size === 'lg',

      /* text button sizes */
      'text-sm px-3 py-1.5': !iconOnly && size === 'sm',
      'text-base px-4 py-2': !iconOnly && size === 'md',
      'text-lg px-5 py-2.5': !iconOnly && size === 'lg',

      /* Variant: primary */
      'bg-ss-anchor border-ss-anchor text-ss-surface-raised shadow-sm is-active:bg-ss-anchor-active is-active:border-ss-anchor-active is-active:shadow-md':
        variant === 'primary',

      /* Variant: outline */
      'bg-transparent border-ss-divider text-ss-fg is-active:bg-ss-canvas is-active:border-ss-fg-subtle/30':
        variant === 'outline',

      /* Variant: ghost */
      'bg-transparent text-ss-fg is-active:bg-ss-fg/5': variant === 'ghost',
    },
    className,
  );

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { children, className, variant = 'primary', iconOnly, size, ...rest },
    ref,
  ) => {
    return (
      <a
        {...rest}
        {...{ ref }}
        className={makeButtonClasses(variant, iconOnly, size, className)}
      >
        {children}
      </a>
    );
  },
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      iconOnly,
      size,
      type = 'button',
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        {...rest}
        {...{ ref, type }}
        className={makeButtonClasses(variant, iconOnly, size, className)}
      >
        {children}
      </button>
    );
  },
);

const CreatedLinkComponent = createLink(ButtonLink);

export const RouterButtonLink: LinkComponent<typeof ButtonLink> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};
