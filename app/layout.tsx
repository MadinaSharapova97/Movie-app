import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin']
})


export const metadata = {
  title: 'Movie Datsabese',
  description: 'Movie Datsabese',
  keywords:['movie','database']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
