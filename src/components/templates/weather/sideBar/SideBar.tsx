import Image from 'next/image'

// Icons
import { PiCloudSunThin } from 'react-icons/pi'
import { CiClock2 } from "react-icons/ci";

// Types
import { WeatherT } from '../Weather'
import KelvinIntoCelsius from '@/components/modules/kelvinIntoCelsius/KelvinIntoCelsius'
import KeyValue from '../keyValue/KeyValue'
import { GrGithub } from 'react-icons/gr'
import Time from '../../../modules/time/Time';


export default function SideBar({ id, main, name, weather, timezone }: WeatherT) {
  
    return (
        <div className=" flex flex-col justify-between items-center  w-96 h-full p-5 text-white backdrop-blur border-r-1 border-zinc-400 rounded-r-3xl ">
            <div className=" group flex items-center select-none hover:text-sky-400 transition-all duration-500 ">
                <h1 className=" group-hover:-translate-y-1.5  transition-all duration-300">Wea</h1>
                <PiCloudSunThin className=" text-3xl  " />
                <h1 className="group-hover:translate-y-1.5  transition-all duration-300">ther</h1>
            </div>
            {
                id ? (
                    <>
                        <div className=" flex items-center flex-col  w-full">
                            <Time UTCtime={timezone} >
                                <CiClock2 className=" text-2xl" />
                            </Time>
                            <h1 className=" flex justify-center items-center text-5xl font-bold text-center">{name}</h1>
                            <Image
                                alt="weather"
                                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                width={100}
                                height={0}
                            />
                            <div className=" flex flex-col gap-1 w-full">
                                <div className=" flex justify-between items-center  text-4xl">
                                    <h1 className="  font-bold">
                                        <KelvinIntoCelsius kelvin={main.temp} />
                                    </h1>
                                    <span>&deg;C</span>
                                </div>
                                <div className="flex justify-between items-center gap-1">
                                    <h1 className=" text-2xl ">
                                        <KelvinIntoCelsius kelvin={main.feels_like} />&deg;
                                    </h1>
                                    <span className=" text-sm">feels like</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full">
                            <KeyValue weatherKey="Min temp">
                                <KelvinIntoCelsius kelvin={main.temp_min} />
                            </KeyValue>
                            <KeyValue weatherKey="Max temp">
                                <KelvinIntoCelsius kelvin={main.temp_max} />
                            </KeyValue>
                            <KeyValue weatherKey="Pressure" weatherValue={`${main.pressure} mb`} />
                            <KeyValue weatherKey="Humidity" weatherValue={`${main.humidity}%`} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className=" flex items-center flex-col gap-5  w-full">
                            <div className="w-full h-16 rounded bg-placeholder animate-pulse"></div>
                            <div className=" w-16 h-16 rounded-full bg-placeholder animate-pulse"></div>
                            <div className="w-full h-5 rounded bg-placeholder animate-pulse"></div>
                            <div className="w-full h-5 rounded bg-placeholder animate-pulse"></div>
                        </div>
                        <div className=" w-full">
                            <div className="w-full h-28 rounded bg-placeholder animate-pulse"></div>
                        </div>
                    </>
                )
            }
            <div className=" flex flex-col items-center gap-3">
                <p className=" text-sm">Welcome to our weather website! We provide accurate, real-time weather forecasts including temperature, humidity, wind speed, and precipitation chances for various regions.</p>
                <div className=" border-t-1 w-full ">
                    <span className="">
                        <a href="https://github.com/Gjadam">
                            <span className=' flex justify-center items-center gap-1 mt-3 text-white hover:text-sky-400 text-sm transition-colors duration-200'> &copy; Created by Gjadam <GrGithub /></span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
