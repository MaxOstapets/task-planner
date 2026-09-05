import s from "./begin-description.module.css"

// TODO deal with interface import 
interface IDescription {
    title: string,
    mainInfo: string
}

export const BeginDescription: React.FC<IDescription> = ({ title, mainInfo }) => {
    return (
        <div className={s.description}>
            <span className={s.title}>{title}</span>
            <p className={s.mainInfo}>{mainInfo}</p>
        </div>
    )
}