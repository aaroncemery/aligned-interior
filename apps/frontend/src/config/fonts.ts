import { Cinzel, La_Belle_Aurore, Inter, Cormorant } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const belleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belle-aurore",
});

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
