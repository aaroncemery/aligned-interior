"use client";

import { usePathname } from "next/navigation";
import { Navigation } from ".";

export default function ClientNavigation() {
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blog") || false;

  return <Navigation.Desktop isStatic={isBlogPage} />;
}
