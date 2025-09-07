import "./globals.css";
import { belleAurore, cinzel, cormorant, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";
import { GoogleAnalytics } from "@/components/tracking/GoogleAnalytics";
import Analytics from "@/components/tracking/Analytics";
import { NavigationWrapper } from "@/components/ui/nav/NavigationWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { DisableDraftMode } from "@/components/ui/DisableDraftMode";

import { SanityLive } from "@/sanity/lib/live";

export { generateMetadata };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDraftMode = (await draftMode()).isEnabled;

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
        <NavigationWrapper>
          {children}
          <SanityLive />
          {isDraftMode && (
            <>
              <DisableDraftMode />
              <VisualEditing />
            </>
          )}
        </NavigationWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
