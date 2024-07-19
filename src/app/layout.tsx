import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/output.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cynthia Chelang'at",
  description: 'Welcome to my website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
