"use client"
import s from "./tasks-filters.module.css"
import { FilterTablet } from "@/src/shared"
import { data } from "./tasks-filters.data"
import { useState } from "react"

export const TasksFilters = () => {
    const [task, setTask] = useState<string[]>([])

    const handlerSetTask = (filter: string) => {
        setTask((prev) => {
            if (prev.includes(filter)) { return prev.filter((item) => item !== filter) }
            return [...prev, filter]
        })
    }

    return (
        <ul className={s.filters}>
            {data.map((el) => <FilterTablet key={el} filter={el} variable={task} onClick={() => handlerSetTask(el)} />)}
        </ul>
    )
}