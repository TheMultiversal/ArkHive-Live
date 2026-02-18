/**
 * Web App Manifest
 * PWA configuration for installable web app
 */

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ArkHive - Investigative Platform',
    short_name: 'ArkHive',
    description: 'An investigative platform exposing the truth about government, corporate, and institutional actions affecting public health and safety.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#d64545',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['news', 'education', 'journalism'],
    icons: [
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/home-wide.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'ArkHive Homepage',
      },
      {
        src: '/screenshots/home-narrow.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'ArkHive Mobile',
      },
    ],
    shortcuts: [
      {
        name: 'Investigations',
        short_name: 'Investigations',
        description: 'View all investigations',
        url: '/investigations',
        icons: [{ src: '/icons/investigations-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Timeline',
        short_name: 'Timeline',
        description: 'View investigation timeline',
        url: '/timeline',
        icons: [{ src: '/icons/timeline-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Submit Tip',
        short_name: 'Submit',
        description: 'Submit anonymous tip',
        url: '/submit',
        icons: [{ src: '/icons/submit-96x96.png', sizes: '96x96' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
