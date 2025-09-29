import React from "react";
import { useUnitContext } from "@/app/context/UnitContext";

export default function UnitToggleGroup() {
  const { unit, toggleUnit } = useUnitContext();
  return (
    <div
      className={
        "flex border-1 border-black text-black font-mono w-full h-full"
      }
    >
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
