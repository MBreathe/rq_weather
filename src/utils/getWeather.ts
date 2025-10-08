import {
  CurrentWeatherResponse,
  ForecastWeatherResponse,
} from "@/models/Weather";
import fetcher from "@/utils/fetcher";
import { Geocoding } from "@/models/Geocoding";
import { CustomError } from "@/models/CustomError";

export default async function getWeather(req: Request, baseUrl: string) {
  const { OPENWEATHER_API_KEY } = process.env;
  if (!OPENWEATHER_API_KEY) {
    throw new CustomError("OPENWEATHER_API_KEY required", 500);
  }

  const { lat, lon, unit } = await req.json();

  if (!lat || !lon || !unit) {
    throw new CustomError("Latitude, longitude, and unit are required", 400);
  }
  if (isNaN(lat) || isNaN(lon)) {
    throw new CustomError("Latitude and longitude is invalid", 400);
  }
  if (unit !== "metric" && unit !== "imperial" && unit !== "standard") {
    throw new CustomError(
      "Invalid unit, must be one of: metric, imperial, standard",
      400,
    );
  }

  const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=${unit}`;

  let city: Geocoding[];
  try {
    city = await fetcher(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${1}&appid=${OPENWEATHER_API_KEY}`,
    );
  } catch (e) {
    throw new CustomError("Error fetching geocoding data", 500);
  }

  if (baseUrl === "https://api.openweathermap.org/data/2.5/weather") {
    const weatherData: CurrentWeatherResponse = await fetcher(url);
    weatherData.name = city[0].name;
    weatherData.weather[0].icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    return weatherData;
  } else {
    const weatherData: ForecastWeatherResponse = await fetcher(url);
    weatherData.city.name = city[0].name;
    weatherData.list.forEach(
      (item) =>
        (item.weather[0].icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`),
    );
    return weatherData;
  }
}
