"use client"
import s from "./new-task-form.module.css"
import Image from "next/image"
import { useState } from "react"
import { NewTaskInput } from "@/src/shared"

const filters = ["important", "not important", "asap", "don’t care", "fast", "unskippable", "later", "NOW", "boring"]

export const NewTaskForm = () => {
    const [toggleList, setToggleList] = useState(false)
    const [tablet, setTablet] = useState<string[]>([])

    const handlerSetToggleList = () => { setToggleList((prev) => !prev) }
    const handlerSetTablet = (filter: string) => {
        setTablet((prev) => {
            if (prev.includes(filter)) { return prev.filter((item) => item !== filter) }
            return [...prev, filter]
        })
    }

    return (
        <form className={s.form}>
            <div className={s.container}>
                <section className={s.inputs}>
                    <NewTaskInput variant="default" placeholder="Task name" />
                    <div className={s.date}>
                        <span className={s.placeholder}>Deadline</span>
                        <div className={s.dateInput}>
                            <div className={toggleList ? s.inputHeaderActive : s.inputHeader} onClick={handlerSetToggleList}>
                                <span className={s.field}>day</span>
                                <Image src="/images/arrowIcon.png" alt="arrow" width={10} height={6} />
                            </div>
                            <ul className={`${s.list} ${toggleList ? s.listOpen : ""}`}>
                                <li className={s.item}>1</li>
                                <li className={s.item}>2</li>
                                <li className={s.item}>3</li>
                                <li className={s.item}>4</li>
                                <li className={s.item}>5</li>
                                <li className={s.item}>6</li>
                                <li className={s.item}>7</li>
                                <li className={s.item}>8</li>
                                <li className={s.item}>9</li>
                                <li className={s.item}>10</li>
                                <li className={s.item}>11</li>
                                <li className={s.item}>12</li>
                                <li className={s.item}>13</li>
                                <li className={s.item}>14</li>
                                <li className={s.item}>15</li>
                                <li className={s.item}>16</li>
                                <li className={s.item}>17</li>
                                <li className={s.item}>18</li>
                                <li className={s.item}>19</li>
                                <li className={s.item}>20</li>
                                <li className={s.item}>21</li>
                                <li className={s.item}>22</li>
                                <li className={s.item}>23</li>
                                <li className={s.item}>24</li>
                                <li className={s.item}>25</li>
                                <li className={s.item}>26</li>
                                <li className={s.item}>27</li>
                                <li className={s.item}>28</li>
                                <li className={s.item}>29</li>
                                <li className={s.item}>30</li>
                                <li className={s.item}>31</li>
                            </ul>
                        </div>
                    </div>
                    <NewTaskInput variant="description" placeholder="Description" />
                </section>
                <section className={s.filters}>
                    <div className={s.tablets}>
                        <span className={s.text}>Add some filters</span>
                        <ul className={s.tabletsList}>
                            {filters.map((filter) => (
                                <li key={filter} className={tablet.includes(filter) ? s.picked : s.tablet} onClick={() => handlerSetTablet(filter)}>{filter}</li>
                            ))}
                        </ul>
                    </div>
                    <button className={s.createNewFilter}>Create filter</button>
                </section>
            </div>
            <button className={s.complete} type="submit">Complete</button>
        </form>
    )
}