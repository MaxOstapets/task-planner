import s from "./new-task.module.css"
import { NewTaskForm } from "@/src/widgets"
import { NewTaskBg } from "./new-task-bg"

export const NewTaskPage = () => {
    return (
        <main className={s.main}>
            <NewTaskBg />
            <NewTaskForm />
        </main>
    )
}