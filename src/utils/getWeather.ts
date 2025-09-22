import { CurrentWeather, ForecastWeather } from "@/models/Weather";
import fetcher from "@/utils/fetcher";

export default async function getWeather(req: Request, baseUrl: string) {
  const { OPENWEATHER_API_KEY } = process.env;
  if (!OPENWEATHER_API_KEY) {
    throw new Error("OPENWEATHER_API_KEY is not defined");
  }

  const { lat, lon, unit } = await req.json();

  if (!lat || !lon || !unit) {
    throw new Error("Latitude, longitude, and unit are required");
  }
  if (isNaN(lat) || isNaN(lon)) {
    throw new Error("Latitude and longitude must be numbers");
  }
  if (unit !== "metric" && unit !== "imperial" && unit !== "standard") {
    throw new Error("Invalid unit, must be one of: metric, imperial, standard");
  }

  const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${unit}`;

  if (baseUrl === "https://api.openweathermap.org/data/2.5/weather") {
    const weatherData: CurrentWeather = await fetcher(url);
    weatherData.weather[0].icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    return weatherData;
  } else {
    const weatherData: ForecastWeather = await fetcher(url);
    weatherData.list.forEach(
      (item) =>
        (item.weather[0].icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`),
    );
    return weatherData;
  }
}
