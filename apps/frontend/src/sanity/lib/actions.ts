"use server";

import { NavigationQuery } from "./queries";
import { sanityFetch } from "./fetch";

type NavigationItem = {
  label: string;
  url: string;
};

type NavigationSection = {
  items: NavigationItem[];
};

type NavigationData = NavigationSection[];

export async function getNavigationData(): Promise<NavigationData> {
  const navigationData = await sanityFetch<NavigationData>({
    query: NavigationQuery,
  });

  return navigationData;
}
