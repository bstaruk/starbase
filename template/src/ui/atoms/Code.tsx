import { forwardRef, type HTMLAttributes, useEffect, useState } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import { LuCopy, LuCheck } from 'react-icons/lu';
import { cn } from 'utils';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: string;
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, className, ...rest }, ref) => {
    const [, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      if (!copied) return;
      const id = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(id);
    }, [copied]);

    const handleCopy = () => {
      copy(children).then(() => setCopied(true));
    };

    return (
      <code
        {...rest}
        {...{ ref }}
        className={cn(
          'inline-flex items-center gap-2 font-mono',
          'bg-sb-canvas text-sb-fg px-4 py-2 rounded-lg',
          className,
        )}
      >
        {children}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          className={cn(
            'shrink-0 cursor-pointer text-sb-fg-subtle transition-colors duration-150',
            'hover:text-sb-fg',
          )}
        >
          {copied ? (
            <LuCheck className="size-4" />
          ) : (
            <LuCopy className="size-4" />
          )}
        </button>
      </code>
    );
  },
);
