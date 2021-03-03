import React from 'react'
import './WeekForecast.sass'

function WeekForecast({ data }) {

    const { daily } = data
    
    return (
        <div className="WeekForecast">
            {daily.map((forecast, index) =>
                <div className="WeekForecast__item" key={index}>
                    <div className="WeekForecast__day">{new Date(forecast.sunrise*1000).toString().split(" ")[0]}</div>
                    <div className="WeekForecast__temp">{forecast.temp.max}/{forecast.temp.min}</div>
                    <div>
                        <img className="WeekForecast__icon" src={`http://openweathermap.org/img/wn/${forecast?.weather[0]?.icon}@2x.png`} alt="Weather Icon" />
                        <span className="WeekForecast__desc">{forecast?.weather[0]?.description}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WeekForecast
