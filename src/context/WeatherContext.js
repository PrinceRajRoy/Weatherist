import axios from 'axios'
import React, { createContext, useRef, useState } from 'react'

export const WeatherContext = createContext({})

function WeatherProvider(props) {

    const [location, setLocation] = useState('')
    const [weather, setWeather] = useState({})
    const [forecast, setForecast] = useState({})
    const [isFetching, setIsFetching] = useState(true)
    const [apiKey] = useState(process.env.REACT_APP_apiKey)
    const source = useRef(null);

    const fetchData = (location) => {
        if(source.current !== null) {
          source.current.cancel("Cancelled")
        }

        source.current = axios.CancelToken.source();

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`, { cancelToken: source.current.token })
            .then(res => {
                setWeather(res.data)
                return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&appid=${apiKey}&units=metric&exclude=hourly,minutely`)
            }).then(res => {
                setForecast(res.data)
                setIsFetching(false)
            }).catch(function(error) {
              if(axios.isCancel(error)) {
                console.log("Request ", error.message);
              }
            })
        setLocation(location)
    }

    return (
        <WeatherContext.Provider value={{ location, weather, forecast, fetchData, isFetching }}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider
