import type { Metadata } from 'next'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'BACKDRP.FM',
  description: 'Catalog of DJ sets (video + audio) in one place.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-gramm="false" data-gramm_editor="false">
      <body
        suppressHydrationWarning
        className={`${mono.variable} bg-[var(--bg)] text-[var(--fg)] antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
