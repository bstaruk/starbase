import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['page', 'page-x'],
      text: ['h1', 'h2', 'h3', 'h4', 'base', 'sm'],
    },
    classGroups: {
      'list-style-type': [{ list: ['circle', 'roman'] }],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
