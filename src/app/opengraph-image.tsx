/* eslint-disable @next/next/no-img-element */
/**
 * OpenGraph Image Generator
 * Generates dynamic OG images for social media sharing
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ArkHive - Investigative Documentation Platform';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
          position: 'relative',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(rgba(214, 69, 69, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(214, 69, 69, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Blood red accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #d64545 50%, transparent 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* Bleeding Eye Logo */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            style={{ 
              marginBottom: '30px',
              filter: 'drop-shadow(0 0 20px rgba(214, 69, 69, 0.6))',
            }}
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
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M68 45 Q75 42, 85 45"
              stroke="#dc2626"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M20 40 Q28 38, 35 42"
              stroke="#b91c1c"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M65 42 Q72 38, 80 40"
              stroke="#b91c1c"
              strokeWidth="0.5"
              fill="none"
              opacity="0.5"
            />
            
            {/* Iris - blood red */}
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

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#ffffff',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              marginBottom: '10px',
            }}
          >
            ArkHive
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#d64545',
              textAlign: 'center',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Investigative Documentation Platform
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: '#a1a1aa',
              textAlign: 'center',
              maxWidth: '800px',
              marginTop: '30px',
              lineHeight: 1.5,
            }}
          >
            Court records. Primary sources. Verified evidence.
            Documenting political corruption and institutional accountability.
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #d64545 50%, transparent 100%)',
          }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderTop: '2px solid #d64545',
            borderLeft: '2px solid #d64545',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderTop: '2px solid #d64545',
            borderRight: '2px solid #d64545',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderBottom: '2px solid #d64545',
            borderLeft: '2px solid #d64545',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderBottom: '2px solid #d64545',
            borderRight: '2px solid #d64545',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
