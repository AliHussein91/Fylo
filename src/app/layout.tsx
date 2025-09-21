import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import favicon from '../../public/favicon-32x32.png'
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fylo",
  description: "Fylo Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
      </head>
      <body
        className={`${openSans.className} antialiased bg-(--navy-900) relative` }
      >
        {children}
      </body>
    </html>
  );
}
