import { NavigationQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

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

export async function useNavigation() {
  const navigationData = await sanityFetch<NavigationData>({
    query: NavigationQuery,
  });

  const navItems: ProcessedNavItem[] =
    navigationData[0]?.items?.map((item) => ({
      label: item.label,
      href: item.url,
      isSection: item.url.startsWith("#"),
    })) || [];

  return { navItems };
}
