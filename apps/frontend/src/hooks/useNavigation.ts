"use client";

import { NavigationQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { useState, useEffect } from "react";

type NavigationItem = {
  label: string;
  url: string;
};

type NavigationSection = {
  items: NavigationItem[];
};

type NavigationData = NavigationSection[];

export type ProcessedNavItem = {
  label: string;
  href: string;
  isSection: boolean;
};

export function useNavigation() {
  const [navItems, setNavItems] = useState<ProcessedNavItem[]>([]);

  useEffect(() => {
    const fetchNavigation = async () => {
      const navigationData = await sanityFetch<NavigationData>({
        query: NavigationQuery,
      });

      const processedItems: ProcessedNavItem[] =
        navigationData[0]?.items?.map((item) => ({
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
