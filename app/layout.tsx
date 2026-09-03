import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://joycasino03.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Joycasino — джойказино: официальный сайт, зеркало и игра онлайн',
  description: 'Подробный гид Joycasino: как найти джойказино официальный сайт, проверить joycasino зеркало и рабочий адрес, разобраться в правилах, лимитах и ответственной игре онлайн для пользователей 18+.',
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { type: 'website', locale: 'ru_RU', url: siteUrl, siteName: 'Joycasino', title: 'Joycasino — понятный гид по онлайн-игре', description: 'Проверка адреса, рабочее зеркало, правила и ответственная игра без громких обещаний.', images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Joycasino' }] },
  twitter: { card: 'summary', title: 'Joycasino — гид по онлайн-игре', description: 'Проверяйте адрес, читайте правила и сохраняйте контроль.' },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f5f7fb', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><head>{/* Дополнительные пользовательские head-теги можно вставлять сюда. */}</head><body className="antialiased">{children}</body></html>
}
