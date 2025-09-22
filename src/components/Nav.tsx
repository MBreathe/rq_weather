import Image from "next/image";
import ToggleTheme from "@/components/ToggleTheme";
import SignInBtn from "@/components/SignInBtn";

export default function Nav() {
  return (
    <nav className=" grid grid-cols-12 gap-0.5 grid-rows-1 p-0.5 font-sans h-20 fixed top-0 left-0 z-50 w-full">
      <div className="bg-neutral-950 p-3 rounded-xl w-full h-full items-center flex gap-2 col-span-3">
        <Image src="/logo-inv.png" alt="logo" width={50} height={50} />
        <h1 className="text-3xl font-mono">rq_weather</h1>
      </div>
      <div className="bg-neutral-950 p-3 rounded-xl w-full h-full flex justify-center items-center col-span-6 col-start-4">
        <h1 className="border-1 w-full rounded-full p-2 mg-1">
          Searchbar placeholder
        </h1>
      </div>
      <div className="bg-neutral-950 p-3 rounded-xl w-full h-full flex items-center justify-center gap-5 col-span-3 col-start-10">
        <ToggleTheme />
        <SignInBtn />
      </div>
    </nav>
  );
}
