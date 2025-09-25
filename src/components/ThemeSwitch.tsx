"use client";
import { useState } from "react";
import { SunMedium, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="flex items-center bg-black rounded-full p-0.5 cursor-pointer h-9 w-22"
    >
      <div
        className={
          "bg-white text-neutral-950 rounded-full h-8 w-14 transition-transform duration-300 ease-in-out flex items-center justify-center" +
          (toggle ? " translate-x-7" : "")
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
