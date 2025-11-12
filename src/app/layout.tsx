import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Urembo Hub | Empowering African Beauty Entrepreneurs",
  description: "Join Kenya's leading beauty-tech platform and transform your salon, spa, or beauty business into a digital powerhouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}