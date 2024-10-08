'use client'
import { useState } from "react"
import Link from "next/link"

// Components
import KelvinIntoCelsius from "@/components/modules/kelvinIntoCelsius/KelvinIntoCelsius"

// Hooks
import useGetWeather from "@/Hooks/useGetWeather"

export default function SearchBox() {

    const [searchValue, setSearchValue] = useState<string>('')

    const { searchData } = useGetWeather(searchValue)

    const goToCityHandler = () => {
        setSearchValue("")
    }

    return (
        <div className=" relative w-full">
            <input type="search" placeholder='Search a city or country...' className=' p-3 rounded-t w-full outline-none placeholder:text-white placeholder:text-sm bg-[rgba(0,0,0,0.3)]' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <div className={` ${searchValue ? 'opacity-100 visible' : ' opacity-0 invisible'} absolute left-0 w-full bg-[rgba(255,255,255,0.7)] text-primary rounded-b overflow-hidden transition-all duration-300`}>
                {
                    searchData.name ? (
                        <Link href={`/search?q=${searchData.name}`}>
                            <div className=" flex justify-between items-center p-2 hover:bg-primary hover:text-white  border-b-1 last:border-none border-zinc-500 transition-colors" onClick={goToCityHandler}>
                                <span className=" font-bold">{searchData.name}</span>
                                <KelvinIntoCelsius kelvin={searchData.main.temp} />&deg;
                            </div>
                        </Link>
                    ) : (
                        <p className=" text-center p-2">City not found</p>
                    )
                }
            </div>
        </div>
    )
}
