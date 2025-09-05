import "./globals.css";
import { belleAurore, cinzel, cormorant, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";
import { GoogleAnalytics } from "@/components/tracking/GoogleAnalytics";
import Analytics from "@/components/tracking/Analytics";
import { NavigationWrapper } from "@/components/ui/nav/NavigationWrapper";
import { AnnouncementWrapper } from "@/components/announcement";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SanityLive } from "@/sanity/lib/live";

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
        <AnnouncementWrapper />
        <NavigationWrapper>
          {children}
          <SanityLive />
        </NavigationWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
