import type { Metadata, Viewport } from 'next'
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'

const sans = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

const description =
  'Freelance software engineer in Paris. Java backends, DevOps, and AI agents that do real work for real teams.'

export const metadata: Metadata = {
  metadataBase: new URL('https://areguig.github.io'),
  title: 'Akli Reguig · Software engineer, backends & AI agents',
  description,
  authors: [{ name: 'Akli Reguig' }],
  keywords: ['Akli Reguig', 'freelance', 'Java', 'Spring Boot', 'Spring AI', 'MCP', 'AI agents', 'Kubernetes', 'Paris'],
  openGraph: {
    title: 'Akli Reguig · Software engineer, backends & AI agents',
    description,
    url: 'https://areguig.github.io',
    siteName: 'Akli Reguig',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
    title: 'Akli Reguig · Software engineer, backends & AI agents',
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#08080a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="overflow-x-clip font-sans">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="backdrop-grid absolute inset-0" />
          <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[120px]" />
          <div className="grain absolute inset-0" />
        </div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
