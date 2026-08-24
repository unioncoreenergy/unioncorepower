import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 40 40">
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
          <path d="M20 0 L36.9 9.75 V29.25 L20 39 L3.1 29.25 V9.75 Z" fill="url(#ucp-cell)" />
          <path
            d="M21.5 5 L11 20 H18.2 L16.5 32 L29 15.5 H21.3 Z"
            fill="url(#ucp-bolt)"
            stroke="#78350f"
            strokeWidth="0.4"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
