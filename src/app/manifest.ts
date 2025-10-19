import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'INGALA EARTH LLP',
    short_name: 'Ingala',
    description:
      'Catalyzing regeneration & resilience through agroecology and landscape restoration.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#F3EFE7',
    theme_color: '#5B1D0F',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
