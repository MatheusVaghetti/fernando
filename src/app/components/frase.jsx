import styles from "./frase.module.css"

export default function Frase() {
    return(
        <section className={styles.frase}>
            <div className={styles.fraseText}>
                <h3>“A Odontologia é uma profissão que exige dos que a ela se dedicam, o senso estético de um artista, a destreza manual de um cirurgião, os conhecimentos científicos de um médico e a paciência de um monge!”</h3>
                <h2>Papa Pio XII em 24 de outubro de 1946 na Itália</h2>
            </div>
        </section>
    )
}