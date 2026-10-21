import styles from './CTAFinal.module.css'

export function CTAFinal({ onReservar, desabilitado }) {
  return (
    <section className={styles.secao} id="cta-final" aria-label="Chamada final">
      <div className={styles.conteudo}>
        <h2 className={styles.titulo}>
          Seu futuro como cientista absurdamente confiante começa agora!
        </h2>
        <button className={styles.botao} type="button" onClick={onReservar} disabled={desabilitado}>
          Reservar meu Demon Core
        </button>
      </div>
    </section>
  )
}
