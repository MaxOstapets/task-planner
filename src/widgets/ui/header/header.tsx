import s from "./header.module.css"
import Image from "next/image"
import { HeaderButton } from "@/src/shared"

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoSection}>
                <Image src="/images/logo.png" alt="logo" width={64} height={64} />
                <span className={s.title}>Task Planner</span>
            </div>
            <div className={s.buttons}>
                <HeaderButton text="log in" type="submit" />
                <HeaderButton text="register" type="submit" />
            </div>
        </header>
    )
}