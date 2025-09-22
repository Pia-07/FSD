import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  // Hardcoded weather data
  const weatherData = {
    surat: { temperature: "39°C" },
    Rajkot: { temperature: "28°C" },
    Delhi: { temperature: "25°C" },
    Mumbai: { temperature: "30°C" },
    Ahmedabad: { temperature: "40°C" },
  };

  const getWeather = () => {
    const cityName = city.trim();
    if (cityName in weatherData) {
      setResult(`The weather in ${cityName} is ${weatherData[cityName].temperature}`);
    } else {
      setResult("City not found. Please try again.");
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Click here to Get Weather</button>
      <p>{result}</p>
    </div>
  );
}

export default WeatherApp;
