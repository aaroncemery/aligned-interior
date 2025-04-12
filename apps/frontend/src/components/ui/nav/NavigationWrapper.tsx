"use client";

import { useNavigation } from "@/hooks/useNavigation";
import { NavigationProvider } from "./NavigationProvider";
import { Footer } from "@/components/ui/Footer";
import FormWrapper from "@/components/Forms/Wrapper";
import ContactForm from "@/components/Forms/Contact";
import dynamic from "next/dynamic";

const ClientNavigation = dynamic(() => import("./ClientNavigation"), {
  ssr: true,
});

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const { navItems } = useNavigation();

  return (
    <NavigationProvider items={navItems}>
      <ClientNavigation />
      {children}
      <FormWrapper id="contact" title="Contact">
        <ContactForm />
      </FormWrapper>
      <Footer />
    </NavigationProvider>
  );
}
