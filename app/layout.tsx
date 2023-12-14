import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})
const viewport = 'width=device-width, initial-scale=1';
export const metadata: Metadata = {
    title: 'ReboTurn',
    description: 'The new generation of e-commerce',
    manifest: 'favicon/site.webmanifest',
    icons: {
        icon: [{url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
            {url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
            {url: '/favicon/favicon.ico', sizes: '16x16', type: 'image/x-icon'}],
        apple: '/favicon/apple-touch-icon.png',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
