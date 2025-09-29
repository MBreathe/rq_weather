import { SunMedium, Moon } from "lucide-react";
import { useThemeContext } from "@/app/context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div
      onClick={toggleTheme}
      className="flex items-center bg-black rounded-full p-0.5 cursor-pointer h-7 w-22"
    >
      <div
        className={
          "bg-white text-neutral-950 rounded-full h-6 w-14 transition-transform duration-300 ease-in-out flex items-center justify-center" +
          (theme === "dark" ? " translate-x-7" : "")
        }
      >
        {theme === "dark" ? (
          <Moon className="text-neutral-950 h-4.5 w-4.5" />
        ) : (
          <SunMedium className="text-neutral-950 h-4.5 w-4.5" />
        )}
      </div>
    </div>
  );
}
