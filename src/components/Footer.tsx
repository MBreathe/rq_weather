import Image from "next/image";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className={"flex font-mono w-full gap-0.5"}>
      <div
        className={
          "flex items-center justify-center bg-white rounded-l-xl p-2 flex-shrink-0 h-full"
        }
      >
        <Image
          src="/logo.png"
          alt="rq_weather logo"
          width={50}
          height={50}
          className={"rounded-full"}
        />
      </div>
      <div className={"bg-white text-black rounded-r-xl p-2 w-full"}>
        <p>Designed and coded by</p>
        <div className={"flex gap-1 items-center"}>
          <p className={"bg-black text-white rounded-full p-1 pl-2 pr-2 w-max"}>
            MBreathe
          </p>
          <Github
            className={"bg-black text-white rounded-full p-1"}
            size={32}
          />
        </div>
      </div>
    </footer>
  );
}
