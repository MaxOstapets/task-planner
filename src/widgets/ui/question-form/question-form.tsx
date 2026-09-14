import s from "./question-form.module.css"
import { QuestionInput, SendButton } from "@/src/shared"

export const QuestionForm = () => {
    return (
        <form className={s.form}>
            <div className={s.inputs}>
                <QuestionInput placeholder="name" type="email" />
                <QuestionInput placeholder="password" type="password" />
                <QuestionInput placeholder="comment" type="text" padding="14px 14px 100px 14px" />
            </div>
            <SendButton />
        </form>
    )
}