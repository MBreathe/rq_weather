"use client";
import { Menu } from "lucide-react";
import { useNavContext } from "@/app/context/NavContext";

export default function BurgerMenu() {
  const { navState, toggleNav } = useNavContext();
  const { navOpen } = navState;
  return (
    <button
      className={`bg-black text-white border-1 ${navOpen && "rotate-90"} rounded-md p-1 mr-1 w-max transition-transform duration-300 ease-in-out`}
      onClick={toggleNav}
    >
      <Menu width={30} height={30} />
    </button>
  );
}
