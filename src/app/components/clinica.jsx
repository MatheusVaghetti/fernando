import styles from "./clinica.module.css"

export default function Clinica() {
    return (
        <section className={styles.clinica} id="fernando">
            <div className={styles.clinicaContainer}>
                <div className={styles.clinicaImage}></div>
                <div className={styles.clinicaText}>
                    <p className={styles.clinicaTextHeading}>DR. FERNANDO</p>
                    <p className={styles.clinicaTextP}>O DR. Fernando apresenta dupla formação acadêmica tendo sido a primeira como Biólogo pela Universidade Mackenzie em 1993 e atuou como professor de Biologia para o ensino médio e Ciências para o ensino fundamental até o ano de 2016 onde passou a dedicar-se exclusivamente a lecionar nos cursos de pós graduação.</p>
                    <p className={styles.clinicaTextP}>Formou-se em Odontologia pela Universidade Metodista de São Paulo em 1999 e começou a atuar em seu consultório particular em 25/04/2000 localizado no Centro Comercial de Alphaville. É especialista em Endodontia, especialista em Dentística e especialista em Implantodontia. O DR. Fernando faz parte da equipe do curso de especialização em endodontia da NEO – núcleo de estudos odontológicos e colabora como assistente da equipe de especialização em Implantodontia da APCD Central. </p>
                </div>
            </div>
            <div className={styles.clinicaContainer}>
                <div className={styles.clinicaText2}>
                    <p className={styles.clinicaTextHeading}>DR. ANTONIO ALEGRIA DO NASCIMENTO</p>
                    <p className={styles.clinicaTextP}>Atualização em Extensão Estética Avançada Instituto Latino-Americano de -Pesquisa e Ensino Odontológico (ILAPEO).</p>
                    <p className={styles.clinicaTextP}>Especialização em Implantodontia no Instituto Branemark de Bauru.</p>
                    <p className={styles.clinicaTextP}>Atualização em implante na Universidade Metodista</p>
                    <p className={styles.clinicaTextP}>Graduação realizada na Universidade Metodista de São Paulo.</p>
                    <p> Atualização em periodontia com Renan Dalla Soares, curso Residência em Periodontia com Ênfase em Cirurgias Plásticas e Regenerativas.</p>
                    <a href="#agendamento"><span>Faça um agendamento</span></a>
                </div>
                <div className={styles.clinicaImage}></div>
            </div>
        </section>
    )
}