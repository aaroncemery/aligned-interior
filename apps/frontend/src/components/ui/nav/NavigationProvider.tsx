"use client";

import React, { createContext, useContext } from "react";

interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

interface NavigationContextType {
  items: NavItem[];
}

const NavigationContext = createContext<NavigationContextType>({ items: [] });

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: NavItem[];
}) => {
  return (
    <NavigationContext.Provider value={{ items }}>
      {children}
    </NavigationContext.Provider>
  );
};
