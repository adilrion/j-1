import { Navbar } from "@/components/common/navbar";
import type { Metadata } from "next";
import "./globals.css";
import './satoshi.css';



export const metadata: Metadata = {
  title: "Finix Code",
  description: "Finix Code is a platform for developers to learn and grow their skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-s-regular antialiased`}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
