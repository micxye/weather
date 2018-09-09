import React from 'react';
import WeatherSearch from './WeatherSearch.jsx';

const WeatherDefault = ({ getWeatherClick, searchWeather }) => {

    return (<div id="weather-app-container">
                <div id="weather-display-container">
                    <div className="default-row">
                        <span className="default-message">Search</span>
                        <img src="arrow.gif" id="arrow"></img>
                    </div>
                    <div className="default-row">
                        <span className="default-message">weather by</span>
                    </div>
                    <div className="default-row">
                        <span className="default-message">city name</span>
                        <img src="info.png" id="info"></img>
                    </div>
                    <div className="default-row">
                        <span className="default-message"></span>
                    </div>
                </div>
                <WeatherSearch getWeatherClick={getWeatherClick} searchWeather={searchWeather} />
            </div>)
}

export default WeatherDefault;