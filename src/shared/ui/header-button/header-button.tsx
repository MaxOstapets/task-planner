import s from "./header-button.module.css"
import { IButton } from "../../types"

export const HeaderButton: React.FC<IButton> = ({ text, type }) => {
    return <button className={s.btn} type={type}>{text}</button>
}