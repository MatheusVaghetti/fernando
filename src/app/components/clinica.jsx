import styles from "./clinica.module.css"

export default function Clinica() {
    return (
        <section className={styles.clinica} id="fernando">
            <div className={styles.clinicaImage}></div>
            <div className={styles.clinicaText}>
                <p className={styles.clinicaTextHeading}>DR. FERNANDO</p>
                <p className={styles.clinicaTextP}>Curabitur condimentum vel augue a luctus. Aenean dictum leo at lacus consequat tincidunt. Nulla accumsan convallis fermentum. Vestibulum ut nunc nisi. Nulla. </p>
                <p className={styles.clinicaTextP}>Curabitur condimentum vel augue a luctus. Aenean dictum leo at lacus consequat tincidunt. Nulla accumsan convallis fermentum. Vestibulum ut nunc nisi. Nulla facilisi. Integer in convallis massa. Fusce quis vehicula est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed purus varius est accumsan condimentum.Curabitur condimentum vel augue a luctus. Aenean dictum leo at lacus consequat tincidunt. Nulla accumsan convallis fermentum. Vestibulum ut </p>
                <p className={styles.clinicaTextP}>Curabitur condimentum vel augue a luctus. Aenean dictum leo at lacus consequat tincidunt. Nulla accumsan convallis fermentum. Vestibulum ut nunc nisi. Nulla facilisi. Integer in convallis massa. Fusce quis vehicula est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed purus varius est accumsan.</p>
                <a href="#agendamento"><span>Faça um agendamento</span></a>
            </div>
        </section>
    )
}