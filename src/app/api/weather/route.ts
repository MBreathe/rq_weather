export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      throw new Error("API key is not defined");
    }
    const { lat, lon } = await req.json();

    if (!lat || !lon) {
      return Response.json({ message: "Invalid request" }, { status: 400 });
    }
    if (isNaN(lat) || isNaN(lon)) {
      return Response.json(
        { message: "Invalid request, lat and lon have to be numbers" },
        { status: 400 },
      );
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // TODO: add class builder for weather data with methods to get weather data
    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
