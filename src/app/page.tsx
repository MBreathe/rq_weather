import { WeatherDash } from "@/components/WeatherDash";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 h-screen font-sans">
      <h1 className="text-4xl border-1 rounded-lg p-1">rq_weather</h1>
      <p>An overly complicated weather app</p>
      <WeatherDash />
    </main>
  );
}
