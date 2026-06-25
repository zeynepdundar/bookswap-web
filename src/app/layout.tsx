import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BookSwap",
  description: "Discover books. Exchange stories. Meet readers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}