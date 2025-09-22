import getWeather from "@/utils/getWeather";

export async function POST(req: Request) {
  try {
    const weatherData = await getWeather(
      req,
      "https://api.openweathermap.org/data/2.5/forecast",
    );

    return Response.json(weatherData);
  } catch (error) {
    console.error(error);
    if (
      error instanceof Error &&
      error.message.includes("OPENWEATHER_API_KEY")
    ) {
      return Response.json({ error: "Server error" }, { status: 500 });
    }
  }
}
