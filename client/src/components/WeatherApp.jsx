import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import WeatherCurrent from './WeatherCurrent.jsx';
import WeatherDefault from './WeatherDefault.jsx';
import WeatherError from './WeatherError.jsx';
import WeatherLoading from './WeatherLoading.jsx';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'default',
        }
        this.searchWeather = this.searchWeather.bind(this);
        this.getWeatherClick = this.getWeatherClick.bind(this);
        this.changeScale = this.changeScale.bind(this);
    }

    searchWeather(cityName) {
        const hide = 'c0804a736aef',
              key = 'f2fdf1e';

        this.setState({ view: 'loading'});
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b682b37f${hide}a17${key}e1`)
            .then(response => {
                this.setState({
                    view: 'weather',
                    scale: 'fahrenheit',
                    name: response.data.name,
                    currentF: this.convertFahrenheit(response.data.main.temp),
                    lowF: this.convertFahrenheit(response.data.main.temp_min),
                    highF: this.convertFahrenheit(response.data.main.temp_max),
                    currentC: this.convertCelsius(response.data.main.temp),
                    lowC: this.convertCelsius(response.data.main.temp_min),
                    highC: this.convertCelsius(response.data.main.temp_max),
                    icon: response.data.weather[0].icon,
                    description: response.data.weather[0].description
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ view: 'error' })
            })
    }

    getWeatherClick(coordinates) {
        const hide = 'c0804a736aef',
              key = 'f2fdf1e',
              coords = coordinates.split(',');

        this.setState({ view: 'loading' });
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&APPID=b682b37f${hide}a17${key}e1`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    view: 'weather',
                    scale: 'fahrenheit',
                    name: response.data.name,
                    currentF: this.convertFahrenheit(response.data.main.temp),
                    lowF: this.convertFahrenheit(response.data.main.temp_min),
                    highF: this.convertFahrenheit(response.data.main.temp_max),
                    currentC: this.convertCelsius(response.data.main.temp),
                    lowC: this.convertCelsius(response.data.main.temp_min),
                    highC: this.convertCelsius(response.data.main.temp_max),
                    icon: response.data.weather[0].icon,
                    description: response.data.weather[0].description
                })
            })
            .catch(err => {
                console.log(err);
                this.setState({ view: 'error' })
            }) 
    }

    convertFahrenheit(kelvinTemp) {
        return Math.round(((kelvinTemp - 273.15) * 1.8) + 32);
    }
    
    convertCelsius(kelvinTemp) {
        return Math.round(kelvinTemp - 273.15);
    }

    changeScale(scale){
        $('.citysuggestions').removeClass('show');
        this.setState({ scale });
    }

    render() {
        if (this.state.view === 'default') {
            return <WeatherDefault getWeatherClick={this.getWeatherClick} searchWeather={this.searchWeather} />
        }
        if (this.state.view === 'error') {
            return <WeatherError getWeatherClick={this.getWeatherClick} searchWeather={this.searchWeather} />
        }
        if (this.state.view === 'loading') {
            return <WeatherLoading getWeatherClick={this.getWeatherClick} searchWeather={this.searchWeather} />
        }
        if (this.state.view === 'weather') {
            return (
                <WeatherCurrent 
                    scale={this.state.scale}
                    name={this.state.name}
                    current={this.state.scale === 'fahrenheit' ? this.state.currentF : this.state.currentC}
                    low={this.state.scale === 'fahrenheit' ? this.state.lowF : this.state.lowC}
                    high={this.state.scale === 'fahrenheit' ? this.state.highF : this.state.highC}
                    icon={this.state.icon}
                    description={this.state.description}
                    getWeatherClick={this.getWeatherClick}
                    searchWeather={this.searchWeather}
                    changeScale={this.changeScale}
                />
            )
        }
    }
}