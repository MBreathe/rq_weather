"use client";
import { useState } from "react";

export default function GeoDisplay() {
  const [pos, setPos] = useState("unknown");
  const requestGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPos(`${position.coords.latitude}, ${position.coords.longitude}`);
      });
    }
  };
  return (
    <>
      <button
        className="text-white p-2 border-1 rounded-md cursor-pointer active:opacity-90"
        onClick={requestGeolocation}
      >
        Get geolocation
      </button>
      <p>Your geolocation:</p>
      <span className="bg-white text-black rounded-md p-3 font-mono">
        {pos}
      </span>
    </>
  );
}
