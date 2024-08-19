import type { Metadata } from "next";
import { Cormorant_Upright } from "next/font/google";
import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flightless Portfolio",
  description: "modern and responsive website to show Flightless projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantUpright.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
