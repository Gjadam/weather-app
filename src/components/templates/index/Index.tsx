'use client'
import { useEffect, useState } from "react";


// Weather Api Key
import weatherApiKey from "@/utils/weatherApiKey";

// Components
import Weather from "@/components/modules/weather/Weather";


// Types
export type WeatherT = {
    id: number
    name: string
    timezone: number
    coord: {
        lat: number
        lon: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    clouds: {
        all: number
    }
    sys: {
        sunrise: number
        sunset: number
    }
}

export type LocationT = {
    latitude: number
    longitude: number
}

export default function Index() {

    const [disconnected, setDisconnected] = useState<boolean>(false)

    const [weather, setWeather] = useState<WeatherT>({
        id: 0,
        name: '',
        timezone: 0,
        coord: {
            lat: 0,
            lon: 0
        },
        weather: [{ id: 0, main: '', description: '', icon: '' }],
        main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0, gust: 0 },
        clouds: { all: 0 },
        sys: { sunrise: 0, sunset: 0 },
    });


    const [location, setLocation] = useState<LocationT>({
        latitude: 0,
        longitude: 0
    })

    const position: [number, number] = [location.latitude, location.longitude];

    useEffect(() => {

        const getUserLocation = async (ipAddress: string) => {
            const res = await fetch(`https://ipapi.co/${ipAddress}/json/`)
            if (res.status === 200) {
                const data = await res.json()

                if (data.country_code === "IR") {
                    setDisconnected(true)

                } else {
                    getWeatherData(data)
                    setLocation(data)
                }
            }
        }

        const getWeatherData = async (weatherData: { latitude: number, longitude: number }) => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherData.latitude}&lon=${weatherData.longitude}&appid=${weatherApiKey}`)

            if (res.status === 200) {
                const data = await res.json()
                setWeather(data)
            }
        }

        (async () => {
            try {

                const ipResponse = await fetch(`https://api.ipify.org?format=json`)

                if (ipResponse.status === 200) {
                    const data = await ipResponse.json()

                    getUserLocation(data.ip)
                } else {
                    setDisconnected(true)
                }
            } catch {
                setDisconnected(true)

            }
        })()



    }, [])

    return (
        <Weather position={position} weather={weather} disconnected={disconnected} />
    )
}
