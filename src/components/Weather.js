import React, { useContext, useEffect } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import Pie from './Pie';
import gsap from 'gsap'
import './Weather.sass'
import WeekForecast from './WeekForecast';

const toCelcius = (celcius) => <>{celcius} <sup className="superScript">°C</sup></>

function Weather() {

    const { weather: data, forecast, isFetching } = useContext(WeatherContext);

    useEffect(() => {
        if (!isFetching) {
            gsap.from(".Weather > *:not(:nth-child(6))", {
                duration: 1,
                y: -40,
                opacity: 0,
                ease: "power2.inOut",
                stagger: 0.1
            })
        }
    }, [data, isFetching])

    return (
        <>
            {!isFetching &&
                <div className="Weather">
                    <div className="Weather__name">{data.name}, {data.sys.country}</div>
                    <div className="Weather__date">{new Date().toDateString()}</div>
                    <div className="Weather__celsius">{toCelcius(data.main?.temp)}</div>
                    <div>Feels Like {toCelcius(data.main?.feels_like)}</div>
                    <div>
                        <img className="Weather__icon" src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt="Weather Icon" />
                        <span className="Weather__description">{data?.weather[0]?.description}</span>
                    </div>
                    <div className="Weather__Pies">
                        <Pie name={"Humidity"} value={data.main.humidity} />
                        <Pie name={"Clouds"} value={data.clouds.all} />
                        {/* <Pie name={"Sea Level"} value={20} /> */}
                    </div>
                    <WeekForecast data={forecast} />
                </div>}
            <svg style={{ position: "fixed" }}>
                <defs>
                    <linearGradient id="Humidity" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="23.1%" stopColor="#C52E19" />
                        <stop offset="46.48%" stopColor="#E58226" />
                        <stop offset="102.95%" stopColor="#EEFF28" />
                    </linearGradient>
                    <linearGradient id="Clouds" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="45.98%" stopColor="#26A0E5" />
                        <stop offset="100%" stopColor="#A2E4E0" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}

export default Weather
