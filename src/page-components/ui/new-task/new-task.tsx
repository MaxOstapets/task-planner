import s from "./new-task.module.css"
import { NewTaskForm } from "@/src/widgets"

export const NewTaskPage = () => {
    return (
        <main className={s.main}>
            <NewTaskForm />
        </main>
    )
}