import s from "./register-input.module.css"

interface IInput {
    placeholder: string
    alt: string
    iconSrc: string
    type: "text" | "email" | "password"
}

export const RegisterInput: React.FC<IInput> = ({ placeholder, alt, iconSrc, type }) => {
    return (
        <div className={s.input}>
            <span className={s.placeholder}>{placeholder}</span>
            <div className={s.field}>
                <input type={type} className={s.inp} />
                <img src={iconSrc} alt={alt} />
            </div>
        </div>
    )
}