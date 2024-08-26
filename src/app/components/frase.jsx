import styles from "./frase.module.css"

export default function Frase() {
    return(
        <section className={styles.frase}>
            <div className={styles.fraseText}>
                <h3>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna metus, auctor quis lacus nec, aliquet blandit tellus. Maecenas maximus metus sed semper iaculis. Morbi laoreet ipsum a fringilla pulvinar.”</h3>
                <h2>DR.FERNANDO</h2>
            </div>
        </section>
    )
}