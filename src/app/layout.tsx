import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'material-icons/iconfont/material-icons.css';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Buymeacoffee from "./components/Buymeacoffee";
import Navbar from "./components/Navbar";

import Favicon from '/public/images/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TailwindMorehelp",
  description: "",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
        <div className="flex justify-center min-h-screen">
          <div className="w-3/5">
            <Header />
            <Navbar />
            <main className="py-8">
              {children}
            </main>
            <Buymeacoffee />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
