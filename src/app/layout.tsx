import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akli Reguig - Senior Software Engineer',
  description: 'DevOps enthusiast, software developer, and tech blogger sharing insights on Java, Spring Boot, PostgreSQL, and modern development practices.',
  authors: [{ name: 'Akli Reguig' }],
  keywords: ['software engineering', 'devops', 'java', 'spring boot', 'postgresql', 'testing', 'lombok'],
  openGraph: {
    title: 'Akli Reguig - Senior Software Engineer',
    description: 'DevOps enthusiast and software developer',
    url: 'https://areguig.github.io',
    siteName: 'Akli Reguig Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akli Reguig - Senior Software Engineer',
    description: 'DevOps enthusiast and software developer',
    creator: '@aklireguig',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}