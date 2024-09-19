import styles from "./about.module.css"

export default function Clinic() {
    return (
        <section className={styles.about} id="clinica">
            <div className={styles.aboutText}>
                <p className={styles.aboutTextHeading}>A CLÍNICA</p>
                <p className={styles.aboutTextP}>É um espaço reservado para clientes especiais que acreditam em uma Odontologia de ponta feita com as melhores técnicas forjadas através de cursos de Especialização em diferentes áreas proporcionando uma visão mais ampla desde o diagnóstico à execução do procedimento. Assim como a qualidade técnica dos profissionais, acreditamos muito na qualidade dos materiais utilizados para alcançar a excelência. </p>
                <p className={styles.aboutTextP}>Somado a isso, um espaço EXCLUSIVO, TRANQUILO com a  PRIVACIDADE necessária para a sua comodidade, segurança e bem estar. </p>
                <p className={styles.aboutTextP}>A nossa clínica multi task ainda conta com profissionais na área da psicologia (diversas abordagens de trabalho), psicopedagia (referencia da ABD na região) e fonoaudiologia. Somos referência no diagnóstico e cuidados necessários para TDAH, dislexia e TEA. Para saber mais clique neste link: <a href="https://espacoserhuman.com.br">https://espacoserhuman.com.br</a></p>
            </div>
            <div className={styles.aboutImage}></div>
        </section>
    )
}