import s from "./filter-tablet.module.css"

interface ITablet {
    filter: string,
    variable: string[],
    onClick: any
}

export const FilterTablet: React.FC<ITablet> = ({ filter, variable, onClick }) => {
    return (
        <li className={variable.includes(filter) ? s.picked : s.tablet} onClick={onClick}>{filter}</li>
    )
}