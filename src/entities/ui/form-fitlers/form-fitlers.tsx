"use client"
import s from "./form-fitlers.module.css"
import { FilterTablet } from "@/src/shared"
import { data } from "./form-fitlers.data"
import { useState } from "react"

export const FormFilters = () => {
    const [tablet, setTablet] = useState<string[]>([])

    const handlerSetTablet = (filter: string) => {
        setTablet((prev) => {
            if (prev.includes(filter)) { return prev.filter((item) => item !== filter) }
            return [...prev, filter]
        })
    }

    return (
        <ul className={s.tabletsList}>
            {data.map((filter) => (<FilterTablet key={filter} filter={filter} onClick={() => handlerSetTablet(filter)} variable={tablet} />))}
        </ul>
    )
}