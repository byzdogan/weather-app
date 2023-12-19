import './App.css';
import CityDropdown from './components/CityDropdown';
import TodayWeather from './components/TodayWeather';
import WeatherCard from './components/WeatherCard';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {

  // WeatherProvider is used for sharing datas between the components inside it
  return (
    <div className='App'>
      <WeatherProvider>
          <CityDropdown />
          <TodayWeather />
          <WeatherCard />               
      </WeatherProvider>     
    </div>
  );
}

export default App;
