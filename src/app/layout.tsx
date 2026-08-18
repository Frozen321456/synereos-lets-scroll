import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'SYNEREOS — Build what comes next.',
  description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
  keywords: ['AI Operating System', 'AI Workspace', 'AI Research', 'HEXIM', 'Synereos', 'AI Agents', 'Machine Learning'],
  authors: [{ name: 'Synereos' }],
  creator: 'Synereos',
  publisher: 'Synereos',
  metadataBase: new URL('https://synereos.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synereos.ai',
    title: 'SYNEREOS — Build what comes next.',
    description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
    siteName: 'SYNEREOS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SYNEREOS — Build what comes next.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYNEREOS — Build what comes next.',
    description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
    images: ['/og-image.png'],
    creator: '@synereos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0b0d12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}