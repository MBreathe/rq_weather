import TimeWidget from "@/components/TimeWidget";
import WeatherWidget from "@/components/WeatherWidget";

export default async function Home() {
  return (
    <main>
      <TimeWidget />
      <WeatherWidget />
    </main>
  );
}
