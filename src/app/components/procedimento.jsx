import styles from "./procedimento.module.css"

export default function Procedimento(){
    return (
        <section className={styles.procedimento}>
            <div className={styles.procedimentoContainer}>
                <p className={styles.procedimentoHeading}>Procedimento 1</p>
                <div className={styles.procedimentoImage}></div>
                <p className={styles.procedimentoP}>Aliquam erat volutpat. Aliquam erat volutpat. Ut suscipit, eros non tincidunt egestas, sapien nibh mattis libero, quis euismod neque leo sit amet nisl. Class aptent taciti sociosqu ad litora torquent per himenaeos. Interdum et malesuada </p>
            </div>
            <div className={styles.procedimentoContainer}>
                <p className={styles.procedimentoHeading}>Procedimento 2</p>
                <div className={styles.procedimentoImage2}></div>
                <p className={styles.procedimentoP}>Aliquam erat volutpat. Aliquam erat volutpat. Ut suscipit, eros non tincidunt egestas, sapien nibh mattis libero, quis euismod neque leo sit amet nisl. Class aptent taciti sociosqu ad litora torquent per himenaeos. Interdum et malesuada </p>
            </div>
            <div className={styles.procedimentoContainer}>
                <p className={styles.procedimentoHeading}>Procedimento 3</p>
                <div className={styles.procedimentoImage3}></div>
                <p className={styles.procedimentoP}>Aliquam erat volutpat. Aliquam erat volutpat. Ut suscipit, eros non tincidunt egestas, sapien nibh mattis libero, quis euismod neque leo sit amet nisl. Class aptent taciti sociosqu ad litora torquent per himenaeos. Interdum et malesuada </p>
            </div>
        </section>
    )
}