"use client"
import s from "./new-task-form.module.css"
import { NewTaskInput, DateInput } from "@/src/shared"
import { FormFilters } from "@/src/entities"

export const NewTaskForm = () => {
    return (
        <form className={s.form}>
            <div className={s.container}>
                <section className={s.inputs}>
                    <NewTaskInput variant="default" placeholder="Task name" />
                    <div className={s.date}>
                        <span className={s.placeholder}>Deadline</span>
                        <div className={s.dateInputs}>
                            <DateInput variant="day" />
                            <DateInput variant="month" />
                            <DateInput variant="year" />
                        </div>
                    </div>
                    <NewTaskInput variant="description" placeholder="Description" />
                </section>
                <section className={s.filters}>
                    <div className={s.tablets}>
                        <span className={s.text}>Add some filters</span>
                        <FormFilters />
                    </div>
                    <button className={s.createNewFilter}>Create filter</button>
                </section>
            </div>
            <button className={s.complete} type="submit">Complete</button>
        </form>
    )
}