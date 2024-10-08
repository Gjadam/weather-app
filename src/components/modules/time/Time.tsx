import { ReactNode } from "react";

// Types
type SunsetSunriseProps = {
    title?: string
    UTCtime: number
    children: ReactNode
}

export default function SunsetSunrise({ title, UTCtime, children }: SunsetSunriseProps) {

    const date = new Date(UTCtime * 1000);

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return (
        <div className=" flex items-center gap-1">
            {children}
            <div className=" flex justify-between items-center gap-1">
                <span className=" text-sm">{title}</span>
                {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? '0' : ''}{minutes}
            </div>
        </div>

    )
}
