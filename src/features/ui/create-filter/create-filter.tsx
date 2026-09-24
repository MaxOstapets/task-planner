"use client"
import { useState } from "react"
import s from "./create-filter.module.css"

export const CreateFilter = () => {
    const [filter, setFilter] = useState(false)
    const handlerSetFilter = () => { setFilter(!filter) }

    return (
        <>
            {!filter ?
                <button className={s.createNewFilterBtn} onClick={() => handlerSetFilter()}>Create filter</button>
                :
                <div className={s.createFilter}>
                    <div className={s.input}>
                        <span className={s.placeholder}>Type your filter</span>
                        <input type="text" className={s.field} />
                    </div>
                    <button className={s.complete} onClick={() => handlerSetFilter()}>
                        <img src="/images/completeIcon.svg" alt="complete" className={s.completeIcon} />
                    </button>
                </div>
            }
        </>
    )
}