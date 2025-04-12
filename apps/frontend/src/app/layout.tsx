import "./globals.css";
import dynamic from "next/dynamic";
import { belleAurore, cinzel, cormorant, inter } from "@/config/fonts";
import { generateMetadata } from "@/config/metadata";
import { useNavigation } from "@/hooks/useNavigation";
import { NavigationProvider } from "@/components/ui/nav/NavigationProvider";
import { Footer } from "@/components/ui/Footer";
import { GoogleAnalytics } from "@/components/tracking/GoogleAnalytics";
import Analytics from "@/components/tracking/Analytics";
import FormWrapper from "@/components/Forms/Wrapper";
import ContactForm from "@/components/Forms/Contact";

const ClientNavigation = dynamic(
  () => import("@/components/ui/nav/ClientNavigation"),
  { ssr: true },
);

export { generateMetadata };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { navItems } = await useNavigation();

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <GoogleAnalytics />
        <Analytics />
      </head>
      <body
        className={`${belleAurore.variable} ${cinzel.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <NavigationProvider items={navItems}>
          <ClientNavigation />
          {children}
          <FormWrapper id="contact" title="Contact">
            <ContactForm />
          </FormWrapper>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}
