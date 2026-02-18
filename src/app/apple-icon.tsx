/**
 * Apple Touch Icon Generator
 * Creates a larger icon for iOS home screens
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          borderRadius: '32px',
        }}
      >
        {/* Bleeding Eye */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 100 100"
          style={{ filter: 'drop-shadow(0 0 8px rgba(214, 69, 69, 0.6))' }}
        >
          {/* Eye white (sclera) */}
          <ellipse
            cx="50"
            cy="45"
            rx="38"
            ry="28"
            fill="#e8e8e8"
          />
          
          {/* Blood veins in sclera */}
          <path
            d="M15 45 Q25 42, 32 45"
            stroke="#dc2626"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M68 45 Q75 42, 85 45"
            stroke="#dc2626"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M20 40 Q28 38, 35 42"
            stroke="#b91c1c"
            strokeWidth="0.3"
            fill="none"
            opacity="0.4"
          />
          <path
            d="M65 42 Q72 38, 80 40"
            stroke="#b91c1c"
            strokeWidth="0.3"
            fill="none"
            opacity="0.4"
          />
          
          {/* Iris - blood red with gradient effect */}
          <circle
            cx="50"
            cy="45"
            r="18"
            fill="#dc2626"
          />
          <circle
            cx="50"
            cy="45"
            r="15"
            fill="#b91c1c"
          />
          
          {/* Pupil */}
          <circle
            cx="50"
            cy="45"
            r="8"
            fill="#000000"
          />
          
          {/* Eye highlight */}
          <ellipse
            cx="44"
            cy="40"
            rx="4"
            ry="3"
            fill="#ffffff"
            opacity="0.8"
          />
          <ellipse
            cx="56"
            cy="48"
            rx="2"
            ry="1.5"
            fill="#ffffff"
            opacity="0.4"
          />
          
          {/* Blood drip 1 - main center */}
          <path
            d="M50 73 Q50 82, 48 92 Q47 97, 50 100 Q53 97, 52 92 Q50 82, 50 73"
            fill="#dc2626"
          />
          
          {/* Blood drip 2 - left */}
          <path
            d="M35 68 Q34 76, 32 85 Q31 90, 33 93 Q35 90, 34 85 Q34 76, 35 68"
            fill="#b91c1c"
          />
          
          {/* Blood drip 3 - right */}
          <path
            d="M65 68 Q66 75, 67 83 Q68 88, 66 91 Q64 88, 65 83 Q65 75, 65 68"
            fill="#b91c1c"
          />
          
          {/* Blood drip 4 - far left small */}
          <path
            d="M25 62 Q24 68, 23 74 Q22 77, 24 79 Q26 77, 25 74 Q25 68, 25 62"
            fill="#991b1b"
            opacity="0.8"
          />
          
          {/* Blood drip 5 - far right small */}
          <path
            d="M75 62 Q76 67, 77 72 Q78 75, 76 77 Q74 75, 75 72 Q75 67, 75 62"
            fill="#991b1b"
            opacity="0.8"
          />
          
          {/* Blood pooling at bottom of eye */}
          <ellipse
            cx="50"
            cy="71"
            rx="36"
            ry="5"
            fill="#991b1b"
            opacity="0.7"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
