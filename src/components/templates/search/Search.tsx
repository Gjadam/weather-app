'use client'

import { useSearchParams } from "next/navigation"

// Components
import Weather from "@/components/modules/weather/Weather"

// Hooks
import useGetWeather from "@/Hooks/useGetWeather"

export default function Search() {
    const searchParams = useSearchParams()

    const searchValue = searchParams.get('q')

    const { searchData } = useGetWeather(searchValue)


    const position: [number, number] = [searchData?.coord.lat, searchData?.coord.lon];

    return (
        <div className="">
            <Weather weather={searchData} position={position} />
        </div>
    )
}
