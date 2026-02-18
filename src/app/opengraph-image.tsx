/* eslint-disable @next/next/no-img-element */
/**
 * OpenGraph Image Generator
 * Generates dynamic OG images for social media sharing
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'ArkHive - Investigative Platform';
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
          {/* Logo/Icon placeholder */}
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '0',
              backgroundColor: 'transparent',
              border: '3px solid #d64545',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#d64545',
              }}
            />
          </div>

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
            Your Government Is Killing You
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
            An investigative platform exposing the truth about government,
            corporate, and institutional actions.
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
