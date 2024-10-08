import { useEffect, useState } from "react";
// Types
import { WeatherT } from "@/components/templates/index/Index";

// Weather api key
import weatherApiKey from "@/utils/weatherApiKey";

export default function useGetWeather(searchValue: string | null) {

    const [searchData, setSearchData] = useState<WeatherT>({
        id: 0,
        name: '',
        timezone: 0,
        coord: {
            lat: 0,
            lon: 0
        },
        weather: [{id: 0, main: '', description: '', icon: '' }],
        main: { temp: 0, feels_like: 0, temp_min: 0, temp_max: 0, pressure: 0, humidity: 0 },
        wind: { speed: 0, deg: 0, gust: 0 },
        clouds: { all: 0 },
        sys: { sunrise: 0, sunset: 0 },
    })

    const getWeatherDataWithSearch = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${weatherApiKey}`)

        if (res.status === 200) {
            const data = await res.json()
            setSearchData(data)
        }
    }

    useEffect(() => {
        if (searchValue?.trim()) {
            getWeatherDataWithSearch()
        }
    }, [searchValue])


    return { searchData }
}
