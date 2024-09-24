import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { FMPreview } from "@components/fm-preview/fm-preview";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Entertainment web app",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-dark-blue text-white`}>
        <FMPreview />
        {children}
      </body>
    </html>
  );
}
