import React from 'react';
import WeatherSearch from './WeatherSearch.jsx';

const WeatherError = ({ getWeatherClick, searchWeather }) => {   
    return (<div id="weather-app-container">
                <div id="weather-display-container">
                    <div className="default-row">
                        <span className="default-message">Error</span>
                        <img src="arrow.gif" id="arrow"></img>
                    </div>
                    <div className="default-row">
                        <span className="default-message">city not</span>
                    </div>
                    <div className="default-row">
                        <span className="default-message">found !</span>
                        <img src="info.png" id="info"></img>
                    </div>
                    <div className="default-row">
                        <span className="default-message">try again</span>
                    </div>
                </div>
                <WeatherSearch getWeatherClick={getWeatherClick} searchWeather={searchWeather} />
            </div>)
}

export default WeatherError;