"use client";
import { useEffect, useState } from "react";
import { CurrentWeather, Units } from "@/models/Weather";
import fetcher from "@/utils/fetcher";
import { useUnitContext } from "@/app/context/UnitContext";
import Image from "next/image";

export default function WeatherWidget() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);
  const { unit } = useUnitContext();

  useEffect(() => {
    const getCurrentWeather = async () => {
      const cachedWeather = localStorage.getItem("weather");
      if (cachedWeather) {
        const parsedWeather = JSON.parse(cachedWeather);
        setWeather(parsedWeather);
        return;
      } else {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lat: "35.6764",
            lon: "139.6500",
            unit: Units[unit],
          }),
        };

        try {
          const data: CurrentWeather = await fetcher(
            "api/weather/current",
            options,
          );
          setWeather(data);
          localStorage.setItem("weather", JSON.stringify(data));
        } catch (e) {
          console.error(e);
        }
      }
    };

    getCurrentWeather();

    const intervalId = setInterval(getCurrentWeather, 10 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [unit]);
  return (
    <div className={"flex gap-0.5 font-mono leading-none mt-0.5 w-full"}>
      {weather && (
        <div
          className={
            "bg-white text-black flex items-center gap-1 p-2 rounded-xl w-full justify-between"
          }
        >
          <div className={"flex gap-1 items-center"}>
            <h1 className={"text-5xl font-medium"}>
              {Math.floor(weather.main.temp)}
            </h1>
            <div>
              <p>{weather.weather[0].main}</p>
              <p>wind: {weather.wind.speed}</p>
              <p>units: {Units[unit]}</p>
            </div>
          </div>
          <div
            className={
              "flex items-center justify-center bg-black h-12 w-12 rounded-md"
            }
          >
            <Image
              src={weather.weather[0].icon}
              alt="weather icon"
              width={40}
              height={40}
            />
          </div>
        </div>
      )}
    </div>
  );
}
