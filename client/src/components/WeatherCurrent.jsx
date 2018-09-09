import React from 'react';
import WeatherSearch from './WeatherSearch.jsx';

const WeatherCurrent = ({scale, name, current, low, high, icon, description, getWeatherClick, searchWeather, changeScale }) => {
    let fahrenheit, celsius;
    if (scale === "fahrenheit") {
        fahrenheit = "fahrenheit mode";
        celsius = "change celsius";
    } else {
        fahrenheit = "change fahrenheit";
        celsius = "celsius mode";
    }
    return (<div id="weather-app-container">
                <div id="weather-display-container">
                    <div id="city-name">{name}</div>
                    <div id="weather-icon-temp-container">
                        <img src={`http://openweathermap.org/img/w/${icon}.png`}></img>
                        <span id="current-temp">{current}</span>
                        <div id="scale-container">
                            <span className={fahrenheit} onClick={() => changeScale('fahrenheit') && $('.citysuggestions').removeClass('show')}>˚F</span>
                            <span id="divide">|</span>
                            <span className={celsius} onClick={() => changeScale('celsius') && $('.citysuggestions').removeClass('show')}>˚C</span>
                        </div>
                    </div>
                    <div id="temp-high-low">
                        <span id="temp-high">High: {high}˚</span>
                        <span id="temp-low">low: {low}˚</span>
                    </div>
                    <div id="description">{description}</div>
                </div>
                <WeatherSearch getWeatherClick={getWeatherClick} searchWeather={searchWeather} />
            </div>)
}

export default WeatherCurrent;