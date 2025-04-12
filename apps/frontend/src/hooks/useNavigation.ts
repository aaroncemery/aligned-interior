"use client";

import { useState, useEffect } from "react";
import { getNavigationData } from "@/sanity/lib/actions";

type NavigationItem = {
  label: string;
  url: string;
};

export type ProcessedNavItem = {
  label: string;
  href: string;
  isSection: boolean;
};

export function useNavigation() {
  const [navItems, setNavItems] = useState<ProcessedNavItem[]>([]);

  useEffect(() => {
    const fetchNavigation = async () => {
      const navigationData = await getNavigationData();

      const processedItems: ProcessedNavItem[] =
        navigationData[0]?.items?.map((item: NavigationItem) => ({
          label: item.label,
          href: item.url,
          isSection: item.url.startsWith("#"),
        })) || [];

      setNavItems(processedItems);
    };

    fetchNavigation();
  }, []);

  return { navItems };
}
