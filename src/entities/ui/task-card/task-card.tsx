import s from "./task-card.module.css"

interface IICard {
    title: string,
    date: string,
    filters: string[],
    description: string,
    completed: boolean
}

export const TaskCard: React.FC<IICard> = ({ title, date, filters, description, completed }) => {
    return (
        <div className={s.card}>
            <div className={s.cardHat}>
                <span className={s.title}>{title}</span>
                <p className={s.date}> {!completed ? "deadline" : "completed"} {date}</p>
            </div>
            <ul className={s.cardFilters}>
                {filters.map((el) => <li className={s.cardTablet}>{el}</li>)}
            </ul>
            <span className={s.taskDescription}>{description}</span>
            {!completed ?
                <div className={s.buttons}>
                    <button className={s.cardButton}>
                        <p className={s.buttonText}>delete</p>
                        <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                    </button>
                    <button className={s.cardButton}>
                        <p className={s.buttonText}>complete</p>
                        <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                    </button>
                </div>
                : <></>
            }
        </div>
    )
}