import s from "./header-button.module.css"

interface IButton {
    text: string,
    type: "submit" | "reset" | "button"
}

export const HeaderButton: React.FC<IButton> = ({ text, type }) => {
    return <button className={s.btn} type={type}>{text}</button>
}