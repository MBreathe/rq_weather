"use client";
import UnitToggleGroup from "@/components/UnitToggleGroup";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useNavContext } from "@/app/context/NavContext";

export default function HiddenMenu() {
  const { navState } = useNavContext();
  const { navOpen } = navState;
  return (
    <div
      className={`bg-white p-2 mt-0.5 rounded-xl ${navOpen ? "flex flex-col gap-1" : "hidden"}`}
    >
      <UnitToggleGroup />
      <ThemeSwitch />
    </div>
  );
}
