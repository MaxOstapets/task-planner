import s from "./new-task-bg.module.css"

export const NewTaskBg = () => {
    return (
        <div className={s.bg}>
            <span className={`${s.square} ${s.square1}`}></span>
            <span className={`${s.square} ${s.square2}`}></span>
            <span className={`${s.square} ${s.square3}`}></span>
            <span className={`${s.square} ${s.square2}`}></span>
            <span className={`${s.square} ${s.square4}`}></span>
            <span className={`${s.square} ${s.square4}`}></span>
            <span className={`${s.square} ${s.square2}`}></span>
            <span className={`${s.square} ${s.square1}`}></span>
            <span className={`${s.square} ${s.square3}`}></span>
            <span className={`${s.square} ${s.square3}`}></span>
        </div>
    )
}