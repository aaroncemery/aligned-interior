import "./globals.css";
import { belleAurore, cinzel, cormorant, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";
import { GoogleAnalytics } from "@/components/tracking/GoogleAnalytics";
import Analytics from "@/components/tracking/Analytics";
import { NavigationWrapper } from "@/components/ui/nav/NavigationWrapper";

export { generateMetadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <GoogleAnalytics />
        <Analytics />
      </head>
      <body
        className={`${belleAurore.variable} ${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}
