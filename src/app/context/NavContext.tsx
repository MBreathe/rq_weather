"use client";
import React, { createContext, useContext, useState } from "react";

interface NavContextType {
  navState: {
    navOpen: boolean;
  };
  toggleNav: () => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [navState, setNavState] = useState({
    navOpen: false,
  });

  const toggleNav = () => {
    setNavState({ navOpen: !navState.navOpen });
  };
  return (
    <NavContext.Provider value={{ navState, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  const { navState, toggleNav } = context;
  return { navState, toggleNav };
};
