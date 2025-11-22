import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'EcoBrushly - Eco-Friendly Cleaning Gadgets from Amazon',
	description: 'Discover the best eco-friendly cleaning gadgets and tools for your home. Expert reviews, sustainable solutions, and Amazon deals.',
	keywords: ['eco-friendly', 'cleaning gadgets', 'sustainable cleaning', 'home cleaning', 'amazon'],
	referrer: 'unsafe-url',
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Header />
				<main className="min-h-screen">
					{children}
				</main>
				<Footer />
				<CookieBanner />
				<Analytics />
			</body>
		</html>
	)
}
