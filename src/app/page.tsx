import TimeWidget from "@/components/TimeWidget";
import WeatherWidget from "@/components/WeatherWidget";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import React from "react";

export default function Landing() {
  return (
    <main className={"mt-17"}>
      <Nav />
      <TimeWidget />
      <WeatherWidget />
      <div className={"bg-white text-black p-2 rounded-xl mt-0.5 mb-0.5"}>
        <div
          className={"flex flex-col font-sans text-2xl leading-7 font-medium"}
        >
          <h1>Register</h1>
          <h1>Add friends</h1>
          <h1>Get summary</h1>
          <h1>Stay up-to-date</h1>
          <h1>And even more...</h1>
        </div>
      </div>
      <div
        className={
          "bg-white text-black p-2 rounded-xl font-sans flex flex-col gap-1 items-center"
        }
      >
        <h2 className={"font-medium text-center text-xl"}>
          Your <span className={"font-light italic"}>weathery</span> cool
          journey
          <br /> starts here
        </h2>
        <Link
          className={"bg-black text-white rounded-xl p-3 text-2xl"}
          href={"/register"}
        >
          Sign-up
        </Link>
      </div>
      <Footer />
    </main>
  );
}
