import GeoDisplay from "@/components/GeoDisplay";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-screen font-sans">
      <h1 className="text-6xl p-4 border-1 rounded-lg">rq_weather</h1>
      <p className="mt-5">An overly complicated weather app</p>
      <GeoDisplay />
    </main>
  );
}
