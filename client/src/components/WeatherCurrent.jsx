import React from 'react';
import WeatherSearch from './WeatherSearch.jsx';

export default class WeatherCurrent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'fahrenheit',
        }
    }

    convertScale() {

    }

    displayScale(kelvinTemp) {
        if (this.state.scale = 'fahrenheit') {
            // convert to f
        }
        if (this.state.scale = 'celsius') {
            // convert to f
        }
    }

    render() {
        return (
            <div id="weather-app-container">
                <div id="weather-display-container">
                    <span id="city-name">{this.props.weather.name}</span>
                    <div id="weather-icon-temp-container">
                        <img src={`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`}></img>
                        <div id="temp-container">
                            <span id="current-temp">{this.props.weather.main.temp}</span>
                            <span id="fahrenheit">˚F</span>
                            <span id="divide">|</span>
                            <span id="celsius">˚C</span>
                        </div>
                    </div>
                    <div id="temp-high-low">
                        <span id="temp-high">High: {this.props.weather.main.temp_max}</span>
                        <span id="temp-low">low: {this.props.weather.main.temp_min}</span>
                    </div>
                    <div id="description">
                        {this.props.weather.weather[0].description}
                    </div>
                </div>
                
                <WeatherSearch getWeatherClick={this.props.getWeatherClick} searchWeather={this.props.searchWeather} />
            </div>
        )
    }
}
