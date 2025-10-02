import Image from "next/image";
import Link from "next/link";

// TODO: Make it look better and add more info
export default function Footer() {
  return (
    <footer className={"flex font-mono w-full gap-0.5 mt-0.5"}>
      <div
        className={
          "flex flex-col items-center justify-center bg-white text-black rounded-l-xl p-2 flex-shrink-0"
        }
      >
        <Image
          src="/logo.png"
          alt="rq_weather logo"
          width={50}
          height={50}
          className={"rounded-full"}
        />
        <span>rq_weather</span>
      </div>
      <div
        className={
          "bg-white text-black rounded-r-xl p-2 w-full flex flex-col gap-0.5 justify-center"
        }
      >
        <p>Designed and coded by</p>
        <Link href={"https://github.com/MBreathe"} target={"_blank"}>
          <p className={"bg-black text-white rounded-full p-1 pl-2 pr-2 w-max"}>
            MBreathe
          </p>
        </Link>
      </div>
    </footer>
  );
}
