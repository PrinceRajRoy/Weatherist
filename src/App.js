import { useContext, useEffect, useRef } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Toggle from './components/Toggle';
import Weather from './components/Weather';
import { ThemeContext } from './context/ThemeContext';
import WeatherProvider from './context/WeatherContext';

function App() {

  const inputRef = useRef();
  const { mode } = useContext(ThemeContext)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className={`App ${mode}`}>
      <Toggle />
      <WeatherProvider>
        <SearchBar ref={inputRef} />
        <Weather />
      </WeatherProvider>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     location: state.location,
//     weather: state.weather,
//     apiKey: state.apiKey
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // updateLocation: (location) => dispatch(changeLocation(location)),
//     fetchWeatherAsync: (location, apiKey) => dispatch(fetchWeatherAsync(location, apiKey))
//   }
// }
export default App;
