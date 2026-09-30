import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { DemoModal } from '@/components/layout/DemoModal';
import { DemoModalProvider } from '@/context/DemoModalContext';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KNK POS India | GST Billing, Inventory & Restaurant POS Software',
  description: "India's fastest POS system by KNK:SOFT INFOTECH. GST-compliant billing, offline mode, UPI payments, and real-time inventory. Trusted by 10,000+ Indian businesses.",
  keywords: [
    'KNK POS',
    'KNK POS system India',
    'KNK Soft Infotech POS',
    'GST billing software',
    'restaurant POS',
    'retail POS',
    'inventory management India',
    'offline billing software',
    'UPI POS machine'
  ],
  openGraph: {
    title: 'KNK POS India | GST Billing & Real-Time Inventory',
    description: 'GST-compliant billing, 100% offline mode, UPI payments, and multi-store control by KNK:SOFT INFOTECH.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900 dark:bg-[#0A0D14] dark:text-slate-100 transition-colors duration-200`}>
        <ThemeProvider>
          <DemoModalProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
            <WhatsAppFloat />
            <DemoModal />
          </DemoModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
