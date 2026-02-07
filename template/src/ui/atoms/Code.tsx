import { type HTMLAttributes, type Ref, useEffect, useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';
import { useCopyToClipboard } from 'usehooks-ts';
import { cn } from 'utils';
import { Button } from 'atoms/Button';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: string;
  ref?: Ref<HTMLElement>;
}

export const Code = ({ children, className, ref, ...rest }: CodeProps) => {
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
      ref={ref}
      className={cn(
        'inline-flex items-center gap-2 font-mono',
        'bg-sb-canvas text-sb-fg px-4 py-2 rounded-lg',
        className,
      )}
    >
      {children}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      >
        {copied ? (
          <LuCheck className="size-4" aria-hidden="true" />
        ) : (
          <LuCopy className="size-4" aria-hidden="true" />
        )}
      </Button>
    </code>
  );
};
