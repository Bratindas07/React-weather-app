/* eslint-disable no-unused-vars */
import Inputs from "./components/Inputs"
import TopButtons from "./components/TopButtons"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetails from "./components/TempAndDetails"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/servives"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const [query,setQuery] = useState({q: "Barrackpore"});
  const [units,setUnits] = useState("metric");
  const [weather,setWeather] = useState(null);

  const capFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  const getWeather = async() =>{
    const message = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capFirstLetter(message)}`)
    await getFormattedWeatherData({...query,units})
    .then((d) => {
      toast.success(`Fetched weather data for ${d.name}, ${d.country}`)
      setWeather(d)});
    // console.log(data)
  }

  useEffect(()=>{
     getWeather();
  },[query,units]);

  const setBackground = () => {
    if(!weather) return "from-cyan-600 to-blue-700"
    const threshold = units === "metric" ? 29:84.2;
      if (weather.temp <= threshold)
      return "from-cyan-600 to-blue-700"
      else
      return "from-yellow-600 to-orange-700"
  }

  return (
    <>
      <div 
      className={`mx-auto bg-gradient-to-br mt-4 py-5 px-32 shadow-xl shadow-gray-400 
      ${setBackground()} max-w-screen-2xl`}>
          <TopButtons setQuery={setQuery} ></TopButtons>
          <Inputs setQuery={setQuery} setUnits={setUnits}></Inputs>

          {weather && (
          <>
            <TimeAndLocation weather={weather}></TimeAndLocation>
            <TempAndDetails weather={weather} units={units}></TempAndDetails>
            <Forecast title="3 hour step forecast" data={weather.hourly}></Forecast>
            <Forecast title="Daily forecast" data={weather.daily}></Forecast>
          </>)}
          <ToastContainer autoClose={1800} hideProgressBar={true} theme="colored"/>
      </div>
    </>
  )
}

export default App
