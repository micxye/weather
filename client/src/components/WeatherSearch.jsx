import React from 'react';
import $ from 'jquery';

export default class WeatherSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            cities: [],
            suggestions: [],
        }
        this.findMatches = this.findMatches.bind(this);
    }

    componentDidMount() {
        $('#weathersearchform').submit(e => {
            e.preventDefault();
            $('#weathersearch').val('').blur(); // unfocus input
            this.props.searchWeather(this.state.input);
        });
        this.getCities();
    }
    
    getCities() {
        const endpoint = 'https://gist.githubusercontent.com/micxye/0e78bc5be375f64967971de6d02266c2/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        fetch(endpoint)
            .then(data => data.json())
            .then(cities => this.setState({ cities }));
    }

    findMatches() {
        const wordToMatch = document.getElementById('weathersearch').value;
        if (wordToMatch.length > 0) {
            let suggestions = this.state.cities.filter(place => {
                const regex = new RegExp(wordToMatch, 'gi');
                return place.city.match(regex) || place.state.match(regex);
            });
            this.setState({ suggestions, input: wordToMatch });
        }
    }

    displayMatches() {
        const suggestions = document.querySelector('.citysuggestions');
        if (this.state.input) suggestions.classList.add('show');

        const htmlSuggestions = this.state.suggestions.map(place => {
            const regex = new RegExp(this.state.input, 'gi');
            const { latitude, longitude } = place;
            const cityName = place.city.replace(regex, `<span class="cityhighlight">${this.state.input.toLowerCase()}</span>`);
            const stateName = place.state.replace(regex, `<span class="cityhighlight">${this.state.input.toLowerCase()}</span>`);
            return `
                <li class="citysuggestionitem">
                    <span class="cityname">${cityName}, ${stateName}<span class="citycoords">${latitude},${longitude}</span></span>
                </li>
            `
        }).join('');
        suggestions.innerHTML = htmlSuggestions;

        const context = this; // event handler
        $('.citysuggestionitem').on('click', function() {
            const coordinates = $(this).find($('.citycoords')).text();
            $('.citysuggestions').removeClass('show');
            context.setState({ input: "" });
            context.props.getWeatherClick(coordinates);
        });
        // hide suggestions when clicking elsewhere
        const hideSuggestions = () => suggestions.classList.remove('show');
        $('body').on('click', ':not(.citysuggestions, .citysuggestionitem, .cityname)', hideSuggestions);
    }

    render() {
        if (this.state.input) this.displayMatches();
        return (
            <div id="weather-search-container">
                <form id="weathersearchform" >
                    <input type="search" id="weathersearch" onKeyUp={this.findMatches} placeholder="Search" autoComplete="off"></input>
                </form>
                <ul className="citysuggestions"></ul>
            </div>
        )
    }
}