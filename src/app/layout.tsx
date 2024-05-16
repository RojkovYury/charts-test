import type { Metadata } from 'next'
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'title meta layout',
  description: 'description meta layout',
}

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}