import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}></div>
            <div className={styles.footerContato}>
                <p>CONTATO</p>
            </div>
            <div className={styles.footerEndereco}>
                <p>ENDEREÇO</p>
            </div>
            <div className={styles.footerMidia}>
                <p>NOSSAS REDES SOCIAIS</p>
            </div>
        </footer>
    )
}