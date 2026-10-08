import s from "./register-form.module.css"
import { RegisterInput } from "@/src/shared"

export const RegisterForm = () => {
    return (
        <form className={s.form}>
            <div className={s.inputs}>
                <RegisterInput placeholder="nickname" iconSrc="/images/nickname.svg" alt="nickname" type="text" />
                <RegisterInput placeholder="email" iconSrc="/images/email.svg" alt="email" type="email" />
                <RegisterInput placeholder="password" iconSrc="/images/eye.svg" alt="eye" type="password" />
            </div>
            <button className={s.confirmButton}>Confirm</button>
        </form>
    )
}