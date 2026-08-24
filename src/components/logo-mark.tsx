import { cn } from '@/lib/utils';

/**
 * Union Core Power brand mark: a hex power-cell badge with a faceted
 * bolt, rendered as inline SVG so it stays crisp at any size and can
 * pick up a gradient instead of a flat icon-on-square glyph.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn('w-8 h-8 shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ucp-cell" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="ucp-bolt" x1="14" y1="6" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Hexagonal power-cell frame */}
      <path
        d="M20 1.5 L36.9 11.25 V30.75 L20 40.5 L3.1 30.75 V11.25 Z"
        transform="translate(0 -1.5)"
        fill="url(#ucp-cell)"
      />

      {/* Faceted lightning bolt */}
      <path
        d="M21.5 6.5 L11 21.5 H18.2 L16.5 33.5 L29 17 H21.3 Z"
        fill="url(#ucp-bolt)"
        stroke="#78350f"
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
