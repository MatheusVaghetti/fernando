import styles from "./hero.module.css"

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h2>Bem vindos ao</h2>
                <h1>ESPAÇO <span className={styles.heroTextBlue}>S</span><span className={styles.heroTextYellow}>E</span><span className={styles.heroTextPurple}>R</span> <span className={styles.heroTextRed}>ODONTO</span></h1>
                <h3>Transforme seu sorriso e faça um upgrade na sua autoconfiança.</h3>
            </div>
        </section>
    )
}