import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cleanzen Boston Cleaning Services | Book Home Cleaning in 60 Seconds',
  description:
    'Boston\u2019s top-rated, background-checked cleaners. Book your home cleaning in 60 seconds with a 100% satisfaction guarantee. LGBTQ+ friendly & fully insured.',
  openGraph: {
    title: 'Cleanzen Boston Cleaning Services',
    description: 'Book your Boston home cleaning in 60 seconds. 100% Satisfaction Guaranteed.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
