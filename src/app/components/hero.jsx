import styles from "./hero.module.css"

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h2>Bem vindos à</h2>
                <h1>CLÍNICA DR.FERNANDO</h1>
                <h3>Transforme seu sorriso e melhore sua confiança</h3>
            </div>
        </section>
    )
}