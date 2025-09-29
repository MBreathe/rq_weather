"use client";
import { useEffect, useState } from "react";
import currentTime from "@/utils/currentTime";

export default function CurrentTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const { time, date } = currentTime();
      setTime(time);
      setDate(date);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={"font-mono leading-none"}>
      <h1 className={"font-medium text-2xl"}>{time}</h1>
      <p className={"font-light"}>{date}</p>
    </div>
  );
}
