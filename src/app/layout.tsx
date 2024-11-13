import type { Metadata } from "next";
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Github Profile",
  description: "Github Profile Challenge from devchallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
