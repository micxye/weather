import React from 'react';
import WeatherSearch from './WeatherSearch.jsx';
import $ from 'jquery';

const WeatherLoading = ({ getWeatherClick, searchWeather }) => {
    $('.citysuggestions').removeClass('show');
    
    return (
        <div id="weather-app-container">
            <div id="weather-display-container">
                <img className="loading" src="loading.gif" alt="loading..." />
            </div>
            <WeatherSearch getWeatherClick={getWeatherClick} searchWeather={searchWeather} />
        </div>
    )
}

export default WeatherLoading;