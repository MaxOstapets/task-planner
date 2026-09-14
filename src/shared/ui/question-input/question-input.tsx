import s from "./question-input.module.css"

interface IInput {
    placeholder: string
    type: "email" | "password" | "text"
    padding?: string
}

export const QuestionInput: React.FC<IInput> = ({ placeholder, type, padding }) => {
    return (
        <div className={s.input}>
            <span className={s.placeholder}>{placeholder}</span>
            <input type={type} className={s.field} style={{ padding: `${padding}` }} />
        </div>
    )
}