/**
 * Dynamic Favicon Generator
 * Creates a favicon with the bleeding eye logo
 */

import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
 width: 32,
 height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
 return new ImageResponse(
 (
 <div
 style={{
 width: '32px',
 height: '32px',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 backgroundColor: '#000000',
 borderRadius: '4px',
 }}
 >
 {/* Bleeding Eye */}
 <svg
 width="28"
 height="28"
 viewBox="0 0 100 100"
 style={{ filter: 'drop-shadow(0 0 2px rgba(0, 85, 184, 0.8))' }}
 >
 {/* Eye white (sclera) */}
 <ellipse
 cx="50"
 cy="45"
 rx="38"
 ry="28"
 fill="#e8e8e8"
 />
 
 {/* Iris - blood red */}
 <circle
 cx="50"
 cy="45"
 r="18"
 fill="#003d8f"
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
 opacity="0.7"
 />
 
 {/* Blood drip 1 - main */}
 <path
 d="M50 73 Q50 80, 48 90 Q47 95, 50 98 Q53 95, 52 90 Q50 80, 50 73"
 fill="#003d8f"
 />
 
 {/* Blood drip 2 - left */}
 <path
 d="M35 68 Q34 75, 32 82 Q31 86, 33 88 Q35 86, 34 82 Q34 75, 35 68"
 fill="#002d6b"
 />
 
 {/* Blood drip 3 - right */}
 <path
 d="M65 68 Q66 74, 67 80 Q68 84, 66 86 Q64 84, 65 80 Q65 74, 65 68"
 fill="#002d6b"
 />
 
 {/* Blood pooling at bottom of eye */}
 <ellipse
 cx="50"
 cy="70"
 rx="35"
 ry="5"
 fill="#001333"
 opacity="0.6"
 />
 </svg>
 </div>
 ),
 {
 ...size,
 }
 );
}
