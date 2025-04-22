import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
