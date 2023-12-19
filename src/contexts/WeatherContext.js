import { createContext, useContext, useState } from 'react';

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    // unique API key
    const API_KEY = '39fdb9cec9aa48acb28224923231812'
    

    // to create variables on Context API to share them with associated components
    const [city, setCity] = useState(localStorage.getItem('city') || 'İstanbul')
    const [weatherData, setWeatherData] = useState(null)
    const date = new Date()
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

    // to fetch weather data then set wheatherData with the data
    const getCityWeather = async () => {
        try {
            const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`
            const response = await fetch(url)
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            console.log(error)
        }      
    }

    // to decide which variabled are shared
    const values = {
        city,
        setCity,
        getCityWeather,
        weatherData,
        date,
        days,
    }

    return <WeatherContext.Provider value={values}>{ children }</ WeatherContext.Provider>

}

const useWeather = () => useContext(WeatherContext)

export {useWeather, WeatherProvider}
