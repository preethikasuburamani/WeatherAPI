import React, { useState } from 'react';

function Result() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);

  const API_KEY = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your key

  const getWeather = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
    );
    const data = await response.json();
    console.log(data)
    setWeather(data);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Result;