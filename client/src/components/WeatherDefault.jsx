import React from 'react';
import $ from 'jquery';
import WeatherSearch from './WeatherSearch.jsx';

export default class WeatherDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.querySelector('.tooltip').addEventListener('mouseenter', () => {
            $('.citysuggestions').removeClass('show');
            $('#weathersearch').val('').blur();
        })
    }

    render() {
        return (
            <div id="weather-app-container">
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
                        <div className="tooltip">ⓘ
                            <span className="tooltiptext">
                                Only cities in the US are suggested below the search bar, but feel free to enter any city in the world!
                            </span>
                        </div>
                    </div>
                    <div className="default-row">
                        <span className="default-message"></span>
                    </div>
                </div>
                <WeatherSearch getWeatherClick={this.props.getWeatherClick} searchWeather={this.props.searchWeather} />
            </div>
        )
    }
}