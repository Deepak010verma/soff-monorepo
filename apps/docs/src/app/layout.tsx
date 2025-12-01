import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/mobile-nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Soff Libraries - Documentation',
  description:
    'Documentation and examples for Soff libraries: soff-date, soff-id, soff-mask, soff-money',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MobileNav />
        <div className="flex min-h-screen lg:min-h-screen">
          <Sidebar />
          <main className="min-h-[calc(100vh-3.5rem)] flex-1 overflow-auto lg:min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
