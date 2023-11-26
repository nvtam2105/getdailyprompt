import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get Daily Free Prompt AI',
  description: 'Get Daily Free Prompt AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
          {children}
        </body>
    </html>
  )
}
