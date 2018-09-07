import React from 'react';
import axios from 'axios';
import WeatherCurrent from './WeatherCurrent.jsx';
import WeatherSearch from './WeatherSearch.jsx';

export default class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'weather',
            weather: {
                main: {
                    temp: 305.38,
                    temp_min: 300,
                    temp_max: 350
                },
                name: 'san fransplismo',
                weather: [
                    {icon: "11d",
                     main: "thundastoms",
                    description: "moderate rain"   }
                ]
            },
        }
        this.searchWeather = this.searchWeather.bind(this);
        this.getWeatherClick = this.getWeatherClick.bind(this);
    }

    searchWeather(cityName) {
        const hide = 'c0804a736aef',
              key = 'f2fdf1e';

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b682b37f${hide}a17${key}e1`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    view: 'weather',
                    weather: response.data
                })
            })
            .catch(err => console.log(err)) // show error on client side
    }

    getWeatherClick(coordinates) {
        const hide = 'c0804a736aef',
              key = 'f2fdf1e',
              coords = coordinates.split(',');

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&APPID=b682b37f${hide}a17${key}e1`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    view: 'weather',
                    weather: response.data
                })
            })
            .catch(err => console.log(err)) // show error on client side
    }

    render() {
        if (this.state.view === 'default') {
            return <WeatherSearch getWeatherClick={this.getWeatherClick} searchWeather={this.searchWeather} />
        }
        if (this.state.view === 'error') {

        }
        if (this.state.view === 'loading') {

        }
        if (this.state.view === 'weather') {
            return <WeatherCurrent getWeatherClick={this.getWeatherClick} searchWeather={this.searchWeather} weather={this.state.weather}/>
        }
    }
}
