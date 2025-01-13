import type { Metadata } from "next";
import { Cinzel, La_Belle_Aurore, Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/ui/nav";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const belleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belle-aurore",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${belleAurore.variable} ${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        {/* <Navigation.Desktop /> */}
        <Navigation.Mobile />
        {children}
      </body>
    </html>
  );
}
