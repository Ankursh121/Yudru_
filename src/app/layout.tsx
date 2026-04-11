import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YuDru - Indigenous Drone Technology | Innovation & R&D Solutions",
  description: "Experience the ultimate aerial intelligence.",
  icons: {
    icon: "/Yudru_Logo.png",
    shortcut: "/Yudru_Logo.png",
    apple: "/Yudru_Logo.png",
  },
};

import CursorGlow from "@/components/CursorGlow";
import ChatWidget from "@/components/ChatWidget";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorGlow />
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
