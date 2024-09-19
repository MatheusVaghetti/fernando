import styles from "./metodo.module.css"

export default function Metodo() {
    return (
        <section className={styles.metodo} id="metodo">
            <p className={styles.metodoHeading}></p>
            <div className={styles.metodoContent}>
                <div className={styles.metodoImage}></div>
                <div className={styles.metodoText}>
                    <p className={styles.metodoTextHeading}>NOSSO MÉTODO</p>
                    <p className={styles.metodoTextP}>Os profissionais do Espaço SER ODONTO tem a sua prática alicerçada na odontologia baseada em evidências científicas desenvolvidas, pesquisadas e testadas nos melhores centros de pós graduação do Brasil. Trazemos da academia uma Odontologia de primeira linha em técnica, recursos e materias de qualidade.</p>
                    <a href="#agendamento"><span>Faça um agendamento</span></a>
                </div>
            </div>
        </section>
    )
}