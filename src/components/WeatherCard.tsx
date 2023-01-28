import Image from "next/image";
import type { weatherState } from "../types";

export default function WeatherCard({
  temperature,
  description,
  humidity,
  windSpeed,
  icon,
}: weatherState) {
  return (
    <div className="mt-4 overflow-hidden rounded bg-white p-8 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-3xl mr-20 font-bold">{temperature}°F</div>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather"
          width={100}
          height={100}
        />
      </div>

      <div className="mb-4 text-xl font-bold capitalize text-brand-100">
        {description}
      </div>

      <div className="flex flex-col">
        <div className="mr-4 text-lg font-bold">Humidity: {humidity}%</div>
        <div className="mr-4 text-lg font-bold">Wind: {windSpeed}mph</div>
      </div>
    </div>
  );
}
