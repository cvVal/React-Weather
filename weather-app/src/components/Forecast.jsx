import '../styles/styles.css';
import moment from 'moment';
import {List} from "semantic-ui-react";
import useWeather from "../hooks/useWeather";

export default function Forecast(props) {
    const {latitude, longitude} = props;
    const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';
    const WEATHER_API_KEY = '';
    const API = `${WEATHER_BASE_URL}/forecast/?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${WEATHER_API_KEY}`

    const data = useWeather(API);
    if (data.error !== null)
        return data.error;

    const forecastData = data.weatherData;

    let results = [];
    if (forecastData.list !== undefined) {
        results = forecastData.list.map((item, index) => {
            const url = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
            const weatherDescription = item.weather[0].description;
            const weatherCondition = item.weather[0].main;
            const weatherTemperature = item.main.temp;
            const dateAndTime = item.dt_txt;
            return (
                <div className="forecast-day-temp" key={index}>
                    <p className="forecast-day">{moment(dateAndTime).format("ddd") + ' ' + moment(dateAndTime).format("LLL")}</p>
                    <p className="forecast-temp">
                        <img className="weather-icon" src={url} alt={weatherDescription}/>
                        {weatherCondition} {weatherTemperature} &deg;F
                    </p>
                </div>
            )
        });
    }

    const cityName = forecastData?.city?.name ?? '';

    return (
        <div className="container">
            <div className="row align-items-center my-5">
                <div className="col-lg-8">
                    <div className="main-forecast">
                        <div className="top">
                            <h1 className="header">{"5 Day Forecast"}</h1>
                        </div>
                        <div className="forecast-body">
                            <p className="forecast-city">{cityName}</p>
                        </div>
                        <div>
                            <List aria-label="forecast data">{results}</List>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}