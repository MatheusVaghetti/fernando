import styles from "./navbar.module.css"

export default function Navbar() {
    return(
        <section className={styles.navbar} id="home">
            <div className={styles.navbarLogo}></div>
            <ul className={styles.navbarLinks}>
                <li><a href="#clinica">CLÍNICA</a></li>
                <li><a href="#fernando">PROFISSIONAIS</a></li>
                <li><a href="#metodo">MÉTODO</a></li>
                <li><a href="#procedimento">PROCEDIMENTOS</a></li>
            </ul>
            <div className={styles.navbarIcon}>
                <a href="#phone">
                    <img src="/phone.png" alt="phone"/>
                </a>
                <a href="#instagram">
                    <img src="/instagram.png" alt="phone"/>
                </a>
                <a href="#facebook">
                    <img src="/facebook.png" alt="phone"/>
                </a>
                <a href="#tiktok">
                    <img src="/tiktok.png" alt="phone"/>
                </a>
                <a href="#youtube">
                    <img src="/youtube.png" alt="phone"/>
                </a>
            </div>
        </section>
    )
}