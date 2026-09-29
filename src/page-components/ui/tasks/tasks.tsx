import s from "./tasks.module.css"
import { TaskCount } from "@/src/entities"

export const TasksPage = () => {
    return (
        <main className={s.main}>
            <section className={s.hat}>
                <div className={s.counts}>
                    <TaskCount title="Completed tasks" count={9} />
                    <TaskCount title="Current tasks" count={6} />
                </div>
                <ul className={s.filters}>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                    <li className={s.tablet}>important</li>
                </ul>
            </section>
            <section className={`${s.currentTasks} ${s.tasks}`}>
                <span className={s.sectionTitle}>Current tasks</span>
                <div className={s.cards}>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${s.completedTasks} ${s.tasks}`}>
                <span className={s.sectionTitle}>Completed tasks</span>
                <div className={s.cards}>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                    <div className={s.card}>
                        <div className={s.cardHat}>
                            <span className={s.title}>Do homework</span>
                            <p className={s.deadline}>deadline 19.09.2026</p>
                        </div>
                        <ul className={s.cardFilters}>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                            <li className={s.cardTablet}>important</li>
                        </ul>
                        <span className={s.taskDescription}>do some homework math and other. test text idgaf</span>
                        <div className={s.buttons}>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>delete</p>
                                <img src="/images/deleteIcon.svg" className={s.buttonIcon} />
                            </button>
                            <button className={s.cardButton}>
                                <p className={s.buttonText}>complete</p>
                                <img src="/images/completeTaskIcon.svg" className={s.buttonIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}