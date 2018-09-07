import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp.jsx';

ReactDOM.render(
    React.createElement(WeatherApp),
    document.getElementById('weather-app')
);
