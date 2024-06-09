import {FaThermometerEmpty} from "react-icons/fa"
import {BiSolidDropletHalf} from "react-icons/bi"
import {FiWind} from "react-icons/fi"
import {GiSunrise,GiSunset} from "react-icons/gi"
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from "react-icons/md"

const TempAndDetails = ({weather: 
    {temp,feels_like,temp_max,temp_min,humidity,sunrise,sunset,speed,details,icon,},units}) => {

    const verticalDetails = [
        {
            id: 1,
            value: `${feels_like.toFixed()}°`,
            title: "Real Feel",
            Icon: FaThermometerEmpty
        },
        {
            id: 2,
            value: `${humidity.toFixed()}%`,
            title: "Humidity",
            Icon: BiSolidDropletHalf
        },
        {
            id: 3,
            value: `${speed.toFixed()} ${units === "metric" ? "km/hr" : "mph"}`,
            title: "Wind",
            Icon: FiWind
        },
    ]
    const horizontalDetails = [
        {
            id: 1,
            value: `${sunrise}`,
            title: "Sunrise",
            Icon: GiSunrise
        },
        {
            id: 2,
            value: `${sunset}`,
            title: "Sunset",
            Icon: GiSunset
        },
        {
            id: 3,
            value: `${temp_max}°`,
            title: "High",
            Icon: MdKeyboardArrowUp
        },
        {
            id: 4,
            value: `${temp_min}°`,
            title: "Low",
            Icon: MdKeyboardArrowDown
        },
    ]
  return (
    <div>
        <div className="flex justify-center items-center py-6 text-xl text-cyan-300">
            <p className="">
                {details}
            </p>
        </div>
        <div className="flex flex-row items-center justify-between py-3">
            <img src={icon} alt="weather-icon" className="w-20"/>
            <p className="text-5xl">
                {`${temp.toFixed()}°`}
            </p>
            <div className="flex flex-col space-y-3 items-start">
            {
                verticalDetails.map(({id,value,title,Icon})=>{
                    return (
                        <div key={id} className="flex font-light text-sm items-center justify-center">
                        <Icon size={18} className="mr-1"/>
                        {title}<span className="font-medium ml-1">{value}
                        </span>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
            {
                horizontalDetails.map(({id,value,title,Icon})=>{

                    return(
                        <div key={id} className="flex flex-row items-center">
                        <Icon size={30}>
                        </Icon>
                        <p className="font-light ml-1">
                            {title}:
                            <span className="font-medium ml-1">
                                {value}
                            </span>
                        </p>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TempAndDetails