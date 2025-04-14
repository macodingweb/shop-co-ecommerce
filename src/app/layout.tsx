import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Shop.co eCommerce using next.js, tailwindCSS",
  description: "Shop.co eCommerce using next.js, tailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
