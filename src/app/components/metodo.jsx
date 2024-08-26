import styles from "./metodo.module.css"

export default function Metodo() {
    return (
        <section className={styles.metodo} id="metodo">
            <p className={styles.metodoHeading}>NOSSO MÉTODO</p>
            <div className={styles.metodoContent}>
                <div className={styles.metodoImage}></div>
                <div className={styles.metodoText}>
                    <p className={styles.metodoTextHeading}>NOME DO MÉTODO</p>
                    <p className={styles.metodoTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim,</p>
                    <p className={styles.metodoTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim,</p>
                    <p className={styles.metodoTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim,Lorem ipsum dolor sit amet.</p>
                    <a href="#agendamento"><span>Faça um agendamento</span></a>
                </div>
            </div>
            <div className={styles.metodoFrase}>
                <p className={styles.metodoFraseP}>“Nam sit amet augue sed ex eleifend rhoncus vel in purus. Sed tincidunt, nibh in sollicitudin ipsum. Nam sit amet” </p>
                <p className={styles.metodoFraseH}>DR.FERNANDO</p>
            </div>
        </section>
    )
}