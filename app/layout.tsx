import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({subsets: ['latin']})
const viewport = 'width=device-width, initial-scale=1';
export const metadata: Metadata = {
    title: 'ReboTurn',
    description: 'The new generation of e-commerce',

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
