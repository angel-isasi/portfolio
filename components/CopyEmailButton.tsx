"use client";

import { useState } from "react";

const EMAIL = "angelisasi2.14@gmail.com";

export default function CopyEmailButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" onClick={copy} className={className}>
      <span aria-live="polite">{copied ? "Copied!" : label}</span>
    </button>
  );
}
