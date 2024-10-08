import type { Metadata } from "next";
import "./globals.css";

import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather app, built with next js",
  icons: {
    icon: '/images/png/favicon.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rajdhani.className}
      >
        {children}
      </body>
    </html>
  );
}
