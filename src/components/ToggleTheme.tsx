"use client";
import { useState } from "react";
import { SunMedium, Moon } from "lucide-react";

export default function ToggleTheme() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="flex items-center text-neutral-50 border-1 rounded-full p-0.5 cursor-pointer h-10 w-20"
    >
      <div
        className={
          "bg-neutral-50 text-neutral-950 rounded-full h-8 w-14 transition-transform duration-300 ease-in-out flex items-center justify-center" +
          (toggle ? " translate-x-4.5" : "")
        }
      >
        {toggle ? (
          <Moon className="text-neutral-950 h-4.5 w-4.5" />
        ) : (
          <SunMedium className="text-neutral-950 h-4.5 w-4.5" />
        )}
      </div>
    </div>
  );
}
