import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Proyect",
  description: "Proyecto Autotrack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
