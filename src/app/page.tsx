import GeoDisplay from "@/components/GeoDisplay";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-screen">
      <h1>rq_weather</h1>
      <p>An overly complicated weather app</p>
      <GeoDisplay />
    </main>
  );
}
