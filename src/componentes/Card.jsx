import styles from './Card.module.css'

export function Card({ imagem, alt, titulo, children }) {
  return (
    <article className={styles.card}>
      {imagem && <img className={styles.imagem} src={imagem} alt={alt} />}
      <div className={styles.corpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <div className={styles.texto}>{children}</div>
      </div>
    </article>
  )
}
