import s from "./tasks.module.css"
import { TaskCount, TasksFilters, TaskCard } from "@/src/entities"
import { currentTasks, completedTasks } from "./tasks.data"

export const TasksPage = () => {
    return (
        <main className={s.main}>
            <section className={s.hat}>
                <div className={s.counts}>
                    <TaskCount title="Completed tasks" count={9} />
                    <TaskCount title="Current tasks" count={6} />
                </div>
                <TasksFilters />
            </section>
            <section className={`${s.currentTasks} ${s.tasks}`}>
                <span className={s.sectionTitle}>Current tasks</span>
                <div className={s.cards}>
                    {currentTasks.map((el) =>
                        <TaskCard
                            title={el.title}
                            date={el.date}
                            filters={el.filters}
                            description={el.description}
                            key={el.title}
                            completed={el.completed} />
                    )}
                </div>
            </section>
            <section className={`${s.completedTasks} ${s.tasks}`}>
                <span className={s.sectionTitle}>Completed tasks</span>
                <div className={s.cards}>
                    {completedTasks.map((el) =>
                        <TaskCard
                            title={el.title}
                            date={el.date}
                            filters={el.filters}
                            description={el.description}
                            key={el.title}
                            completed={el.completed} />
                    )}
                </div>
            </section>
        </main>
    )
}