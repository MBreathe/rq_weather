"use client";
import React, { useState } from "react";

export default function UnitToggleGroup() {
  const [unit, setUnit] = useState<"C" | "F" | "K">("C");
  const toggleUnit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newUnit = e.currentTarget.textContent;
    if (newUnit === unit) {
      return;
    }
    if (newUnit) {
      setUnit(newUnit as "C" | "F" | "K");
    }
  };
  console.log(unit);
  return (
    <div className={"flex border-1 border-black text-black font-mono w-full"}>
      <button
        className={`flex-1 ${unit === "C" && "bg-black text-white"}`}
        onClick={toggleUnit}
      >
        C
      </button>
      <button
        className={`flex-1 border-l-1 border-r-1 border-black ${unit === "F" && "bg-black text-white"}`}
        onClick={toggleUnit}
      >
        F
      </button>
      <button
        className={`flex-1 ${unit === "K" && "bg-black text-white"}`}
        onClick={toggleUnit}
      >
        K
      </button>
    </div>
  );
}
