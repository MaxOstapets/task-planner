import s from "./task-count.module.css"

interface ICount {
    title: string
    count: number
}

export const TaskCount: React.FC<ICount> = ({ title, count }) => {
    return (
        <div className={s.countWidget}>
            <span className={s.countTitle}>{title}</span>
            <p className={s.count}>{count}</p>
        </div>
    )
}