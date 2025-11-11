import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FoodWagen - Food Delivery',
  description: 'Discover and manage your favorite foods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

