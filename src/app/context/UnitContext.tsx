"use client";
import React, { createContext, useContext } from "react";

interface UnitContextType {
  unit: "C" | "F" | "K";
  toggleUnit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

export function UnitProvider({ children }: { children: React.ReactNode }) {
  const [unit, setUnit] = React.useState<"C" | "F" | "K">("C");

  const toggleUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newUnit = e.currentTarget.textContent;
    if (newUnit === unit) {
      return;
    }
    if (newUnit) {
      setUnit(newUnit as "C" | "F" | "K");
    }
  };
  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

export const useUnitContext = () => {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error("useUnitContext must be used within a UnitProvider");
  }
  const { unit, toggleUnit } = context;
  return { unit, toggleUnit };
};
