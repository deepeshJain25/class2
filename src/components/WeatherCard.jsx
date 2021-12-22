import React from 'react';
import '../styles.css'

const WeatherCard = (props) => {
    
    const weather = props.data.weather[0].description;
    const temp = Math.floor(props.data.main.temp);
    const feelsLike = Math.floor(props.data.main.feels_like)
    const windSpeed = Math.floor(props.data.wind.speed)
    return (
    <div className="note" style={{textAlign:"center"}}>
      <h1>{props.data.name}</h1>
      <p>The Weather is <b>{weather}</b></p>
      <p>The Temp is {temp} Celsius</p>
      <p>It feels like {feelsLike} Celsius</p>
      <p>The Wind Speed is {windSpeed} mph</p>
      <button>Clear</button>
    </div>
    );
};



export default React.memo(WeatherCard);