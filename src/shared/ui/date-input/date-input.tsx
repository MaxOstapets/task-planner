"use client"
import s from "./date-input.module.css"
import Image from "next/image"
import { useState } from "react"

interface IDate {
    variant: "day" | "month" | "year"
}

const days: number[] = []
const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const years: number[] = []

for (let i = 1; i < 32; i++) {
    days.push(i)
}

for (let i = 1930; i < 2027; i++) {
    years.push(i)
}

export const DateInput: React.FC<IDate> = ({ variant }) => {
    const [toggleList, setToggleList] = useState(false)
    const handlerSetToggleList = () => { setToggleList((prev) => !prev) }

    return (
        <>
            {
                variant === "day" &&
                <div className={s.dateInput}>
                    <div className={toggleList ? s.inputHeaderActive : s.inputHeader} onClick={handlerSetToggleList}>
                        <span className={s.field}>Day</span>
                        <Image src="/images/arrowIcon.png" alt="arrow" width={10} height={6} />
                    </div>
                    <ul className={`${s.list} ${toggleList ? s.listOpen : ""}`}>
                        {days.map((el) => <li className={s.item} key={el}>{el}</li>)}
                    </ul>
                </div>
            }
            {
                variant === "month" &&
                <div className={s.dateInput}>
                    <div className={toggleList ? s.inputHeaderActive : s.inputHeader} onClick={handlerSetToggleList}>
                        <span className={s.field}>Month</span>
                        <Image src="/images/arrowIcon.png" alt="arrow" width={10} height={6} />
                    </div>
                    <ul className={`${s.list} ${toggleList ? s.listOpen : ""}`}>
                        {months.map((el) => <li className={s.item} key={el}>{el}</li>)}
                    </ul>
                </div>
            }
            {
                variant === "year" &&
                <div className={s.dateInput}>
                    <div className={toggleList ? s.inputHeaderActive : s.inputHeader} onClick={handlerSetToggleList}>
                        <span className={s.field}>Years</span>
                        <Image src="/images/arrowIcon.png" alt="arrow" width={10} height={6} />
                    </div>
                    <ul className={`${s.list} ${toggleList ? s.listOpen : ""}`}>
                        {years.map((el) => <li className={s.item} key={el}>{el}</li>)}
                    </ul>
                </div>
            }
        </>
    )
}