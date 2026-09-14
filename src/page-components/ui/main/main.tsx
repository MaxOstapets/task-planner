import s from "./main.module.css"
import { BeginButton } from "@/src/shared"
import { BeginDescription } from "@/src/entities"
import { data } from "./main.data"
import { QuestionForm } from "@/src/widgets"

export const HomePage = () => {
    return (
        <main className={s.main}>
            <section className={s.begin}>
                <span className={s.beginText}>We'll help to remember your plans</span>
                <BeginButton text="Begin" type="submit" />
            </section>
            <section className={s.aboutUs}>
                {data.map((el) => <BeginDescription title={el.title} mainInfo={el.mainInfo} key={el.title} />)}
            </section>
            <section className={s.contactUs}>
                <span className={s.contactText}>Got any question or ideas? Write them</span>
                <QuestionForm />
            </section>
        </main>
    )
}