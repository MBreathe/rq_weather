import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ThemeSwitch from "@/components/ThemeSwitch";
import UnitToggleGroup from "@/components/UnitToggleGroup";
import BurgerMenu from "@/components/BurgerMenu";

export default function Nav() {
  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 max-w-full m-1"}>
      <div className={"flex gap-1"}>
        <div
          className={
            "bg-white p-2 rounded-tl-xl rounded-bl-xl flex items-center justify-center flex-shrink-0"
          }
        >
          <Link href="/" className={"rounded-full"}>
            <Image
              src="/logo.png"
              alt="rq_weather logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div
          className={
            "bg-white flex justify-between items-center gap-1 p-2 rounded-tr-xl rounded-br-xl w-full"
          }
        >
          <SearchBar />
          <BurgerMenu />
        </div>
      </div>
      <div className={"bg-white p-1 mt-1 rounded-md flex flex-col gap-1"}>
        <UnitToggleGroup />
        <ThemeSwitch />
      </div>
    </nav>
  );
}
