"use client";

import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Quantum</title>
      </head>
      <body className={`${manrope.className}`}>
        <div
          className={`${
            pathname === "/" ? "absolute top-0 left-0 right-0 z-20" : ""
          }`}
        >
          <Navbar />
        </div>
        {children}
        <Footer />
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}
