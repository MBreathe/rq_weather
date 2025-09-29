import getWeather from "@/utils/getWeather";
import { CustomError } from "@/models/CustomError";

export async function POST(req: Request) {
  try {
    const weatherData = await getWeather(
      req,
      "https://api.openweathermap.org/data/2.5/weather",
    );

    return Response.json(weatherData);
  } catch (error) {
    console.error(error);
    if (error instanceof CustomError) {
      return Response.json(
        { error: error.message },
        { status: error.status || 500 },
      );
    }
  }
}
