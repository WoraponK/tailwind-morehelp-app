import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'material-icons/iconfont/material-icons.css';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
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
          <div className="w-4/5">
            <Header />
            <div className="pt-8 grid grid-cols-[15%_85%]">
              <Navbar />
              <main className="p-4">
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
