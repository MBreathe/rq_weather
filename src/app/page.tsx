import TimeWidget from "@/components/TimeWidget";
import WeatherWidget from "@/components/WeatherWidget";

export default async function Home() {
  return (
    <main>
      <TimeWidget />
      <WeatherWidget />
      <div>
        <div>
          <h1>Register</h1>
          <h1>Add friends</h1>
          <h1>Get summary</h1>
          <h1>stay up-to-date</h1>
          <h1>And even more...</h1>
        </div>
        <p>
          rq_weather uses generative AI to summarize weather conditions in
          natural language
        </p>
        <p>
          More connected and admittedly more complicated way to check the
          forecast
        </p>
      </div>
      <div>
        <h2>
          Your <span>weathery</span> cool journey starts here
        </h2>
        <button>Sign-up</button>
      </div>
    </main>
  );
}
