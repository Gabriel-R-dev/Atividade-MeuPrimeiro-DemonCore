import styles from './ComoFunciona.module.css'

const PASSOS = [
  'Abra a embalagem com entusiasmo.',
  'Leia o manual e descubra que ele remete a outro manual.',
  'Receba seu certificado de cientista extraordinariamente confuso.',
]

export function ComoFunciona() {
  return (
    <section className={styles.secao} id="como-funciona" aria-label="Como funciona">
      <h2 className={styles.tituloSecao}>Como funciona a experiência</h2>
      <p className={styles.subtitulo}>
        Três etapas simples, totalmente fictícias e inofensivas.
      </p>
      <div className={styles.grid}>
        {PASSOS.map((passo, index) => (
          <article key={index} className={styles.card}>
            <span className={styles.numero}>Passo {index + 1}</span>
            <p className={styles.texto}>{passo}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
