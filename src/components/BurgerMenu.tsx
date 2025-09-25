"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <button
      className={"bg-black text-white rounded-md p-1 mr-1 w-max"}
      onClick={toggleMenu}
    >
      <Menu width={30} height={30} />
    </button>
  );
}
