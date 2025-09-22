import Image from "next/image";
import Toggle from "@/components/Toggle";

export default function Nav() {
  return (
    <nav className=" grid grid-cols-12 gap-0.5 grid-rows-1 p-0.5 font-sans h-20">
      <div className="bg-neutral-950 p-3 rounded-lg w-full h-full items-center flex gap-2 col-span-3">
        <Image src="/logo-inv.png" alt="logo" width={50} height={50} />
        <h1 className="text-3xl font-mono">rq_weather</h1>
      </div>
      <div className="bg-neutral-950 p-3 rounded-lg w-full h-full flex justify-center items-center col-span-6 col-start-4">
        <h1 className="border-1 w-full rounded-full p-2 mg-1">
          Searchbar placeholder
        </h1>
      </div>
      <div className="bg-neutral-950 p-3 rounded-lg w-full h-full flex items-center justify-center gap-2 col-span-3 col-start-10">
        <Toggle w={10} h={6} />
        <button className="bg-neutral-50 text-neutral-950 rounded-sm p-2 text-xl cursor-pointer hover:bg-neutral-950 hover:text-neutral-50 active:bg-neutral-50 active:text-neutral-950 transition-all">
          Sign-up
        </button>
      </div>
    </nav>
  );
}
