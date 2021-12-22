import React, { useState } from 'react';
import axios from "axios";
import "../styles.css"
import WeatherCard from './WeatherCard';

const Weather = () => {

    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const apiKey = 'afd6c3c92c150de18b76fa1904f00441';
    const unit = 'metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&units=${unit}&appid=${apiKey}`

    const getCityInfo = (e) => {
        e.preventDefault();
        axios.get(url).then((res)=>{
            console.log(res.data);
            setError(false)
            setData(res.data)
        }).catch(err=>{
            console.log(err.message)
            setCity("")
            setData(null)
            setError(true)
            setTimeout(()=>setError(false), 5000);
        })
    }

    const errorMessage = <p>Please enter valid City Name</p>

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <h2 style={{textAlign:'center',marginTop:'10px'}}>Weather App</h2>
            <form>
            <input placeholder='Enter City Name' name='city' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={getCityInfo}>Get</button>
            </form>
            {!error && data && <WeatherCard data={data}/>}
            {error && errorMessage}
        </div>
    );
};



export default Weather;