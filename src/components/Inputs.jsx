/* eslint-disable no-unused-vars */
import {BiSearch,BiCurrentLocation} from "react-icons/bi"
import { useState } from "react"

const Inputs = ({setQuery,setUnits}) => {

  const [city,setCity] = useState(null);
  const handleSearchClick = () => {
    if(city!== null)
    setQuery({q: city});
  }

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        const {latitude,longitude} = pos.coords;
        setQuery({lat: latitude, lon: longitude});
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/5 items-center justify-center space-x-4">

            <input type="text" placeholder="search by city"
            className="text-md focus:outline-none capitalize
            placeholder:lowercase text-gray-500 font-light p-2 w-full shadow-xl placeholder:text-center"
            value={city} onChange={(e)=> setCity(e.currentTarget.value)}></input>

            <BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}></BiSearch>

            <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}></BiCurrentLocation>
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={()=>setUnits("metric")}>°C</button>
            <p className="font-medium mx-1 text-2xl">|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125"
            onClick={()=>setUnits("imperial")}>°F</button>
        </div>
    </div>
  )
}

export default Inputs