import { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./Weather.scss";
import { WeatherData } from "../../types/WeatherType";
import locationIcon from "../../assets/images/location.png";
import cross from "../../assets/images/black-cross.png";
import WeatherExtra from "../WeatherExtra/WeatherExtra";

type WeatherProps = {
  initialLocation: string;
};

const Weather = ({ initialLocation }: WeatherProps) => {
  const [showExtra, setShowExtra] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<string>(initialLocation);
  const [inputLocation, setInputLocation] = useState<string>("");

  const toggleShowExtra = () => {
    setShowExtra(!showExtra);
  };

  const handleLocationChange = () => {
    if (inputLocation.trim()) {
      setLocation(inputLocation);
    }
  };
const reload = () => {
    window.location.reload()
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
        setError("Failed to fetch weather data. Please Wait...");
        setWeatherData(null);
        setTimeout(reload, 2000)
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


  const uvIndex = (uv: number) => {
    if (uv >= 0 && uv < 3) {
      return "Low";
    } else if (uv >= 3 && uv < 6) {
      return "Moderate";
    } else if (uv >= 6 && uv < 8) {
      return "High";
    } else if (uv <= 8 && uv < 10) {
      return "Very High";
    } else {
      return "Extreme";
    }
  };

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
    vis_km,
    vis_miles,
    humidity,
    gust_kph,
    gust_mph,
    condition,
  } = weatherData.current;
  const { text, icon } = condition;

  return (
    <div className="weather">
      <p className="weather__last-update">Last Updated: {last_updated}</p>
      <div className="weather__input-container">
        <img
          alt="Location Icon"
          className="weather__location-image"
          src={locationIcon}
        />
        <input
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="e.g Kuala Lumpur"
          className="weather__input"
        />
        <Button label="🔍" onClick={handleLocationChange} variant="secondary" />
      </div>
      <img className="weather__image" src={icon} />
      <h5 className="weather__description">{text}</h5>
      <h1 className="weather__temp">{temp_c}°C</h1>
      {!showExtra ? (
        <Button label="More..." onClick={toggleShowExtra} variant="primary" />
      ) : (
        <img
          className="weather__cross"
          src={cross}
          onClick={toggleShowExtra}
          alt="Exit"
        />
      )}
      {showExtra && (
        <div className="weather__extra">
          <WeatherExtra title="🌡Feels like" data={`${feelslike_c}°C`} />
          <WeatherExtra title="☀UV Index" data={`${uv}`} more_info={getUvIndexWarning} />
          <WeatherExtra title={"☂Precipitation"} data={`${precip_mm}mm`} />
          <WeatherExtra title={"👁Visibility"} data={`${vis_km}km`} />
          <WeatherExtra title={"🌬Wind"} data={`${wind_kph}kph`} />
          <WeatherExtra title={"🌀Humidity"} data={`${humidity}%`} />
          


         
          {/* add a slider to show what the max uv ratings are. */}
          {/* <div className="weather__extra-container">
            <h3 className="weather__title">☂Precipitation</h3>
            <h2 className="weather__data">{precip_mm} mm</h2>
          </div>

          <div className="weather__extra-container">
            <h3 className="weather__title">👁Visibility</h3>
            <h2 className="weather__data">{vis_miles} mph</h2>
          </div>

          <div className="weather__extra-container">
            <h3 className="weather__title">🌬Wind</h3>
            <h2 className="weather__data">{wind_mph} mph</h2>
          </div>

          <div className="weather__extra-container">
            <h3 className="weather__title">🌀Humidity</h3>
            <h2 className="weather__data">{humidity}%</h2>
          </div> */} 
        </div>
      )}
    </div>
  );
};

export default Weather;
