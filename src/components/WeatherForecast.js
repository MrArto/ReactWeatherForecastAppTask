import React from "react";
import {useState} from "react";
import "./WeatherForecast.css";
import ShowWeather from "./ShowWeather";


function WeatherForecast() {

    const [form, setForm] = useState({location: ""})
    const [weather, setWeather] = useState([]);

    const handleRequest = (e) => {
        setForm({...form, location: e.target.value})
    }

    async function weatherFetch (e) {
        e.preventDefault();
        if (form.location === "") {
            alert("Provide valid location, e.g. city name")
        } else {
            const data = await fetch(`https://goweather.herokuapp.com/weather/${form.location}`)
                                .then(response => response.json())
                                .then(data => data);
            setWeather({data : data});
        }
    }


    return <div className="weather" >
                <p className="title" > Weather Forecast App </p> 
                    <form>
                        <input type="text"
                                name="location"
                                placeholder="Enter the location"
                                onChange={
                                    e => handleRequest(e)
                                }></input> 
                        <button className="getWeather" onClick={e => weatherFetch(e)}>Get the Forecast</button> 
                    </form>
                    {
                        weather.data !== undefined ? <ShowWeather data={weather.data} /> : null
                    }
            </div>
    }

export default WeatherForecast;