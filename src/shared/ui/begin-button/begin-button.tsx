import s from "./begin-button.module.css"
import { IButton } from "../../types"

export const BeginButton: React.FC<IButton> = ({ text, type }) => {
    return <button className={s.btn} type={type}>{text}</button>
}