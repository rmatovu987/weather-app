/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextPage } from "next";
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import type { weatherState } from "../types";
import { useDebounce } from "../utils";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<weatherState>();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  const setActualWeather = (data: weatherState) => {
    setWeather(data);
  };

  useEffect(() => {
    async function fetchWeather() {
      setLoader(true);
      setWeather(undefined);

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${debouncedQuery.trim()}&appid=${
          process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log("we have data");
            if (data?.cod !== 200) {
              setError(data?.message || "Error");
              setActualWeather(data);
            } else {
              setActualWeather({
                temperature: data.main?.temp,
                description: data.weather[0]?.description,
                humidity: data.main?.humidity,
                windSpeed: data.wind?.speed,
                icon: data.weather[0]?.icon,
              });
              setError(null);
            }
          }
        })
        .catch((e: any) => {
          setError(e);
        });

      setLoader(false);
    }

    if (debouncedQuery) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchWeather();
    }
  }, [debouncedQuery]);

  const onQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery((e.target as HTMLInputElement).value);
    setWeather(undefined);
    setError(null);
  };

  const onQueryClear = () => {
    setQuery("");
  };


  const onDismiss = () => {
    setWeather(undefined);
    setError(null);
  };

  console.log(query, weather, loader);

  return (
    <>
    <div className="isolate bg-white">
      <Header />

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="max-w-3xl mx-auto pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <h1 className="text-4xl sm:text-6xl mb-5 font-bold tracking-tight sm:text-center">
                Weather
              </h1>

              <SearchBar
                query={query}
                onQuery={onQuery}
                onQueryClear={onQueryClear}
              />

              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <Loader status={loader} />

                {query && weather && !loader && !error && (
                  <div>
                    <WeatherCard {...weather} />
                  </div>
                )}

                {query && !loader && error && (
                  <Alert error={error} onDismiss={onDismiss}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
