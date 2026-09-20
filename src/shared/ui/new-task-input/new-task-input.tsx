import s from "./new-task-input.module.css"

interface IInput {
    placeholder: string
    type?: "email" | "password" | "text"
    variant: "default" | "description"
}

export const NewTaskInput: React.FC<IInput> = ({ placeholder, type, variant }) => {
    return (
        <div className={s.input}>
            <span className={s.placeholder}>{placeholder}</span>
            {variant === "default" ? <input className={s.field} type={type} /> : <textarea rows={5} className={s.field}></textarea>}
        </div>
    )
}