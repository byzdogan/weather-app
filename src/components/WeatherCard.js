import React from 'react'
import { useWeather } from '../contexts/WeatherContext'
import '../styles/card.css'

function WeatherCard() {

  const { weatherData, days } = useWeather()

  // to create an array for stroing the days in name format due to their number value from getDay()
  const dateArr = weatherData && weatherData.forecast.forecastday.slice(1).map(item => {
    const data = new Date(item.date)
    return data.getDay() 
  })

  // weekly weather is rendered when wheatherData exists with map function
  return (
    <div className='weekly-weather'>
    {
     weatherData &&
     weatherData.forecast.forecastday.slice(1).map((item, i) => (
      <div key={item.date_epoch} className='weather-card'>
        <img className='icon-card' src={item.day.condition.icon} alt="weather-icon" />
        <div className='card-content' >
          <div className='card-temp'>{ Math.trunc(item.day.avgtemp_c) }°</div>
          <div className='date'>{days[dateArr[i]]}</div>      
          <div className="min-max-temp">
            <span>{ Math.trunc(item.day.mintemp_c) }°</span>
            <span>{ Math.trunc(item.day.maxtemp_c) }°</span>                 
          </div>
          </div>
        </div>
      ))
    }      
    </ div>
  )
}

export default WeatherCard