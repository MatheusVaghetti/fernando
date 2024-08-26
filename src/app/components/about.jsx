import styles from "./about.module.css"

export default function Clinic() {
    return (
        <section className={styles.about} id="clinica">
            <div className={styles.aboutText}>
                <p className={styles.aboutTextHeading}>A CLÍNICA</p>
                <p className={styles.aboutTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim, congue a viverra cursus, egestas et erat. Sed bibendum elit nec erat semper interdum. Curabitur sit amet felis eu metus finibus sagittis non nec sapien. Proin tincidunt aliquet ipsum at interdum. Vestibulum mauris </p>
                <p className={styles.aboutTextP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque commodo, rutrum enim quis, viverra nunc. Integer urna enim, congue a viverra cursus, egestas et erat. Sed bibendum elit nec erat semper interdum. Curabitur sit amet felis eu metus finibus sagittis non </p>
            </div>
            <div className={styles.aboutImage}></div>
        </section>
    )
}