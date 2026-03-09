import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Weather = () => {

    const[city,setCity]=useState("");
    const[weather,setWeather] = useState(null);
    const [error,setError]= useState(false)


    // useEffect(async()=>{
    //     try{
    //         const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ffbcfc95119c6d6b9a1a62ec28310d3d&units=metric")
    //         if(response.ok){
    //             const data = await response.json()
    //             setWeather(data)
    //         }
    //     }catch{
    //         setError(true)
    //     }
    // }),[]


    const getWeather = async () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffbcfc95119c6d6b9a1a62ec28310d3d&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setWeather(data);
    setCity()
 }
    
  return (
    <div className='weather-card'>

        <div className='searchbar'>
            <input type='Text' placeholder='Enter city' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={getWeather}>Search</button>

        </div>

        {weather && (
  <div className='weather-info'>
    <h2>{weather.name}, {weather.sys.country}</h2>
    <h3>{weather.weather[0].main}</h3>
    <p>{weather.weather[0].description}</p>

    <h1>{weather.main.temp}°C</h1>
    <p>Feels like {weather.main.feels_like}°C</p>
    <p>Humidity: {weather.main.humidity}%</p>
    <p>Wind: {weather.wind.speed} m/s</p>
  </div>
)}
        {/* {
        weather==null? 
        <div>
              <p>Current Weather</p>
        </div>:
        
        <div>
            <p>{weather.weather[0].main}  : Current Weather</p>      
            <p>{weather.weather[0].description} : Description</p>
            
        </div>} */}

    </div>
  )
}

export default Weather

