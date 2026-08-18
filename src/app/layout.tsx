import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces, Space_Grotesk, Geist_Mono } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display-alt',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'SYNEREOS — Build what comes next.',
  description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
  openGraph: {
    title: 'SYNEREOS — Build what comes next.',
    description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYNEREOS — Build what comes next.',
    description: 'Synereos is an AI Operating System for Builders. Think. Build. Orchestrate.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0d12',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${/* spaceGrotesk.variable */ ''} ${/* geistMono.variable */ ''}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#0b0d12] text-white font-body antialiased overflow-x-hidden">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate preloader hide - runs before body renders
              if (document.getElementById('preloader')) {
                document.getElementById('preloader').style.display = 'none';
              }
              setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (preloader) preloader.style.display = 'none';
              }, 100);
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Safety: force hide after 2 seconds max
              setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (preloader) preloader.style.display = 'none';
              }, 2000);
            `
          }}
        />
        {children}
      </body>
    </html>
  )
}