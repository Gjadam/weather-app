import { ReactNode } from "react"

type KeyValueProps = {
    weatherKey: string
    weatherValue?: ReactNode
    children?: ReactNode
}

export default function KeyValue({ weatherKey, weatherValue, children }: KeyValueProps) {
    return (
        <div className=" flex justify-between items-center gap-3">
            <span className=" text-sm">{weatherKey}</span>
            {
                weatherValue ? (
                    <span>{weatherValue}</span>
                ) : (
                    <span>{children}&deg;</span>
                )
            }
        </div>
    )
}
