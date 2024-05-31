import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Weather.scss";
import { WeatherData } from "../../types/WeatherType";

type WeatherProps = {
  location: string;
};

const Weather = ({ location }: WeatherProps) => {
  const [showExtra, setShowExtra] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const toggleShowExtra = () => {
    setShowExtra(!showExtra);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "1817ba2f890e44e3a69203844243005";
        const result = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
        );
        if (!result.ok) {
          throw new Error(
            `Something went wrong. HTTP Status: ${result.status}`
          );
        }
        const data = await result.json();
        setWeatherData(data);
      } catch (error) {
        setError("Failed to fetch weather data");
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [location]);

  if (error) {
    return <div className="weather__error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="weather__loading">Loading...</div>;
  }

  const uvIndex = (uv : number) => {
    if(uv >= 0 && uv < 3){
        return "Low"
    } else if ( uv >= 3 && uv < 6){
        return "Moderate"
    } else if (uv >= 6 && uv < 8){
        return "High"
    } else if( uv <= 8 && uv < 10){
        return "Very High"
    } else {
        return "Extreme"
    }
  }

  const currentUv = weatherData.current.uv;
  const getUvIndexWarning = uvIndex(currentUv);

  const {
    temp_c,
    temp_f,
    last_updated,
    wind_kph,
    wind_mph,
    feelslike_c,
    feelslike_f,
    uv,
    precip_in,
    precip_mm,
    condition,
  } = weatherData.current;
  const { text, icon } = condition;

  return (
    <div className="weather">
        <p className="weather__last-update">Last Updated: {last_updated}</p>
      <h2 className="weather__location">{location}</h2>
      <img className="weather__image" src={icon}/>
      <h5 className="weather__description">{text}</h5>
      <h1 className="weather__temp">
        {temp_c}°C 
      </h1>
      <Button label="More..." onClick={toggleShowExtra} />
      {showExtra && (
        <div className="weather__extra">
            <div className="weather__extra-container">
          <h3 className="weather__title">🌡Feels like</h3>
          <h2 className="weather__data">
            {feelslike_c}°C 
          </h2>
          </div>

          <div className="weather__extra-container">
          <h3 className="weather__title">☀UV Index</h3>
          <h2 className="weather__data">
            {uv}
          </h2>
          <h3 className="weather__more">{getUvIndexWarning}</h3>
          </div>
        {/* add a slider to show what the max uv ratings are. */}
          <div className="weather__extra-container">
          <h3 className="weather__title">☂Precipitation</h3>
          <h2 className="weather__data">
            {precip_mm} mm 
          </h2>
          </div>

          <div className="weather__extra-container">
          <h3 className="weather__title">🌬Wind</h3>
          <h2 className="weather__data">
            {wind_mph} mph 
          </h2>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default Weather;

// useState to expand a section where more data is shown, like UV, wind, humidity,
