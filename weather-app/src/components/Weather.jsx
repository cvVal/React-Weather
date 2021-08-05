import '../styles/styles.css';
import moment from 'moment';
import useWeather from "../hooks/useWeather";

export default function Weather(props) {
    const {latitude, longitude} = props;
    const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';
    const WEATHER_ICON_URL = 'https://openweathermap.org/img/wn';
    const WEATHER_API_KEY = '';
    const API = `${WEATHER_BASE_URL}/weather/?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${WEATHER_API_KEY}`;

    const data = useWeather(API);
    if (data.error !== null)
        return data.error;

    const weatherData = data.weatherData;
    const weatherDataObj = {
        cityName: weatherData?.name ?? '',
        temperature: weatherData?.main?.temp ?? '',
        icon: weatherData?.weather?.[0]?.icon ?? '',
        condition: weatherData?.weather?.[0]?.main ?? '',
        weatherDescription: weatherData?.weather?.[0]?.description ?? '',
    }

    let weatherIcon;
    if (weatherDataObj.icon !== '')
        weatherIcon = `${WEATHER_ICON_URL}/${weatherDataObj.icon}@2x.png`;

    return (
        <div className="container">
            <div className="row align-items-center my-5">
                <div className="col-lg-8">
                    <div className="main">
                        <div className="top">
                            <h1 className="header">{"Current Temperature"}</h1>
                            <p className="day">{moment().format('ddd')}, {moment().format('LLL')}</p>
                        </div>
                        <div className="weather-body">
                            <h3 className="city">{weatherDataObj.cityName}</h3>
                            <img className="weather-icon" src={weatherIcon}
                                 alt={weatherDataObj.weatherDescription}/>
                            <span>{weatherDataObj.condition} {weatherDataObj.temperature} &deg;F</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
