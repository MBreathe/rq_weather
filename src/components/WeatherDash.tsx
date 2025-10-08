"use client";
import { useEffect, useState } from "react";
import { CurrentWeatherResponse } from "@/models/Weather";
import fetcher from "@/utils/fetcher";
import Image from "next/image";

// FOR REFERRAL
export function WeatherDash() {
  const [pos, setPos] = useState({ lat: 0, lon: 0, unit: "metric" });
  const [weatherData, setWeatherData] = useState<CurrentWeatherResponse | null>(
    null,
  );

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPos({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          unit: "metric",
        });
      });
    }
  };

  useEffect(() => {
    if (pos.lat === 0 && pos.lon === 0) {
      return;
    }

    const fetchWeather = async () => {
      const data: CurrentWeatherResponse = await fetcher(
        "http://localhost:3000/api/weather/current",
        { method: "POST", body: JSON.stringify(pos) },
      );
      setWeatherData(data);
    };

    fetchWeather();
  }, [pos]);

  return (
    <>
      {weatherData ? (
        <div className="flex flex-col items-center justify-center gap-2 border-1 rounded-md p-3">
          <h1 className="text-3xl">{weatherData.name}</h1>
          <Image
            width={100}
            height={100}
            src={weatherData.weather[0].icon}
            alt="weather icon"
          />
          <h2 className="text-2xl font-bold">{weatherData.main.temp} °C</h2>
          <p className="text-lg">{weatherData.weather[0].description}</p>
        </div>
      ) : (
        <button
          className="border-1 p-1 cursor-pointer active:opacity-90 rounded-sm"
          onClick={getPosition}
        >
          Get Weather
        </button>
      )}
    </>
  );
}
