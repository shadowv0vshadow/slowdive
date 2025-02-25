import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slowdive | 音乐专辑海报墙',
  description: '一个灵感来自Slowdive乐队的音乐专辑海报墙应用',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 