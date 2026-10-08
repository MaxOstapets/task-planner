import s from "./register.module.css"
import { RegisterForm } from "@/src/widgets"

export const RegisterPage = () => {
    return (
        <main className={s.main}>
            <RegisterForm />
        </main>
    )
}