import { useEffect } from 'react'
import windIcon from '../assets/weather-icons/wind.png'
import humiIcon from '../assets/weather-icons/humidity.png'
import '../styles/today-weather.css'
import { useWeather } from '../contexts/WeatherContext'

function TodayWeather() {

    const {city, weatherData, date, days  } = useWeather()

    // to shows today's weather when wheatherData exist 
  return (
    <div className='today-weather'>
            {
        weatherData && <>
        <img className='weather-icon' src={weatherData.current.condition.icon} alt="weather-icon" />
        <div className='weather-content' >
           <div className='weather-location'>{city}</div>
           <div className='weather-temp'>{weatherData.current.temp_c}°</div>
           <div className='date-time'>{days[date.getDay()]}, { 0 < date.getHours() < 10 ? date.getHours() : `0${date.getHours()}` }.{date.getMinutes()}</div>      
           <div className="min-max-celcius">
                   <span>{Math.trunc(weatherData.forecast.forecastday[0].day.mintemp_c)}°</span>
                   <span>{Math.trunc(weatherData.forecast.forecastday[0].day.maxtemp_c)}°</span>                 
           </div>
           <div className="weather-details">
               <div className='wind'>
                   <img src={windIcon} alt="wind" />
                   <br />
                   {weatherData.current.wind_kph} km/h
               </div>
               <div className='humidity'>
                   <img src={humiIcon} alt="humidity" />
                   <br />
                   {weatherData.current.humidity}%
               </div>
           </div>
       </div>
        </>
    }
    </div>
  )
}

export default TodayWeather