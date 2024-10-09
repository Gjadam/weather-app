'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

// Icons
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaCloud } from "react-icons/fa";
import { GiWindsock } from "react-icons/gi";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { VscDebugDisconnect } from "react-icons/vsc";

// Components
import SideBar from "@/components/modules/weather/sideBar/SideBar";
import KeyValue from "@/components/modules/weather/keyValue/KeyValue";
import Time from "../time/Time";
import Map from "./map/Map";

// Types
import { WeatherT } from "@/components/templates/index/Index";
interface WeatherProps {
    position: [number, number];
    weather: WeatherT
    disconnected?: boolean
}

export default function WeatherPage({ position, weather, disconnected }: WeatherProps) {

    const [bgImage, setBgImage] = useState<string>('')

    useEffect(() => {
        if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
            setBgImage('/images/jpg/storm.jpg')
        } else if (weather.weather[0].id >= 300 && weather.weather[0].id <= 321) {
            setBgImage('/images/jpg/drizzle.jpg')
        } else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
            setBgImage('/images/jpg/rain.jpg')
        } else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
            setBgImage('/images/jpg/snow.jpg')
        } else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
            setBgImage('/images/jpg/fog.jpg')
        } else if (weather.weather[0].id >= 801 && weather.weather[0].id <= 804) {
            setBgImage('/images/jpg/cloud.jpg')
        } else {
            setBgImage('/images/jpg/clear.jpg')
        }


    }, [weather.id])


    return (
        <>
            <div className=" bg-primary -z-10 p-5 w-full h-screen">
                <div className=" rounded-3xl flex justify-start items-start gap-10 relative w-full h-full overflow-hidden">
                    <Image
                        alt="cloud"
                        src={bgImage}
                        width={0}
                        height={0}
                        objectFit="cover"
                        layout="fill"
                        className=" absolute left-0 right-0 bottom-0 top-0  "
                    />
                    <SideBar {...weather} />
                    <div className=" hidden lg:flex justify-between h-full flex-col gap-5 w-full z-10 p-5">
                        {
                            weather.id !== 0 ? (
                                <div className=" flex justify-between items-start w-full">
                                    <div className="flex flex-col gap-5  text-white">
                                        <div className=" flex items-center gap-5 ">
                                            <Time title="Sunrise" UTCtime={weather.sys.sunrise} >
                                                <WiSunrise className=" text-4xl" />
                                            </Time>
                                            <Time title="Sunset" UTCtime={weather.sys.sunset} >
                                                <WiSunset className=" text-4xl" />
                                            </Time>
                                        </div>
                                        <div className="">
                                            <h1 className=" text-white text-7xl font-bold">{weather.weather[0].main}</h1>
                                            <h1 className=" text-white text-lg">{weather.weather[0].description}</h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center flex-col gap-2 ">
                                        <div className=" flex justify-center items-center w-24 h-24 rounded-full border-2 border-dotted">
                                            <div className=" relative">
                                                <span className="absolute left-5 -top-4 text-white">
                                                    <GiWindsock />
                                                </span>
                                                <IoIosArrowRoundUp style={{ transform: `rotate(${weather.wind.deg}deg)` }} className=" text-white text-5xl transition-all duration-300" />
                                                <span className="absolute left-4 -bottom-4 text-white text-xs">{weather.wind.deg}&deg;</span>
                                            </div>
                                        </div>
                                        <div className=" text-white">
                                            <KeyValue weatherKey="Speed" weatherValue={`${weather.wind.speed}m/s`} />
                                        </div>
                                        <div className=" flex justify-center items-center relative ">
                                            <FaCloud className=" text-8xl text-white" />
                                            <span className=" absolute top-11 font-bold text-sm">{weather.clouds.all}%</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className=" flex items-start justify-between w-full gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className=" flex gap-3">
                                            <div className=" z-20 w-32 h-8 rounded bg-placeholder animate-pulse"></div>
                                            <div className=" z-20 w-32 h-8 rounded bg-placeholder animate-pulse"></div>
                                        </div>
                                        <div className=" z-20 w-72 h-20 rounded bg-placeholder animate-pulse"></div>
                                        <div className=" z-20 w-48 h-14 rounded bg-placeholder animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        <div className=" w-24 h-24 rounded-full bg-placeholder animate-pulse"></div>
                                        <div className="  w-full h-5 rounded bg-placeholder animate-pulse"></div>
                                        <FaCloud className=" text-8xl text-placeholder animate-pulse" />
                                    </div>
                                </div>
                            )
                        }
                        <Map position={position} />
                    </div>
                </div>
            </div>
            <div className={disconnected ? 'flex justify-center items-center z-50 bg-zinc-900 bg-opacity-75 fixed left-0 top-0 right-0 bottom-0' : ' hidden'}>
                <div className=" flex justify-center items-center flex-col gap-3 bg-zinc-300 w-96 rounded p-5">
                    <div className=" flex justify-center items-center flex-col gap-2">
                        <VscDebugDisconnect className=" text-5xl text-red-400" />
                        <span>This service not available in your country</span>
                    </div>
                    <div className="">
                        <p className=" text-red-400 ">"برای دسترسی به سرویس لطفا آی پی خود را تغییر دهید"</p>
                    </div>
                </div>
            </div>
        </>
    )
}
