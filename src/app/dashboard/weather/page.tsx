import { InputLocation, LocationList, WeatherDetail } from "@/components";

export const metadata = {
  title: "Current Weather",
  description: "Show the current weather for location",
};

export default async function WeatherPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-5">
      <h1 className="text-[30px] font-semibold">Weather</h1>
      <InputLocation />
      <LocationList />
      <WeatherDetail />
    </div>
  );
}
