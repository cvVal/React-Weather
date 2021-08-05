import {useState, useEffect} from "react";

export default function useWeather(url) {
    const [error, setError] = useState(null);
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const ac = new AbortController();
        fetch(url)
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    throw new Error(`${response.status}`);
            })
            .then(data => {
                setWeatherData(data)
                setError(null)
            })
            .catch(err => {
                setError(err.message);
            });
        return () => ac.abort();
    }, [url]);

    return {
        error: error,
        weatherData: weatherData
    };
}