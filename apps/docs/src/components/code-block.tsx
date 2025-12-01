'use client';

import { useState, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 rounded-md bg-muted-foreground/10 px-2 py-1 text-xs text-muted-foreground opacity-0 transition-opacity hover:bg-muted-foreground/20 group-hover:opacity-100"
      aria-label="Copy code"
    >
      {copied ? (
        <span className="flex items-center gap-1">
          <Check size={14} />
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <Copy size={14} />
        </span>
      )}
    </button>
  );
}

interface CodeBlockProps {
  children: ReactNode;
  code: string;
}

export function CodeBlock({ children, code }: CodeBlockProps) {
  return (
    <div className="group relative">
      <CopyButton text={code} />
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 pr-20 text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );
}
