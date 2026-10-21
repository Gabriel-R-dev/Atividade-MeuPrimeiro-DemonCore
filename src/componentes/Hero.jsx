import embalagem from '../assets/embalagem.jpeg'
import styles from './Hero.module.css'

export function Hero({ onReservarKit, desabilitado }) {
  return (
    <section className={styles.hero} id="hero" aria-label="Apresentação do produto">
      <div className={styles.heroTexto}>
        <span className={styles.selo}>
          Aprovado pelo Departamento de Ideias Questionáveis e totalmente seguras
        </span>
        <h2 className={styles.titulo}>
          A ciência nunca foi tão suspeitamente divertida!
        </h2>
        <p className={styles.descricao}>
          Um kit científico fictício que promete transformar qualquer jovem em um pequeno gênio
          da ciência. Embalagem com núcleo luminoso, botões decorativos e gráficos
          incompreensíveis. Resultado não garantido, mas a confiança é absoluta.
        </p>
        <div className={styles.preco}>
          <span className={styles.precoAntigo}>De: R$ 349,90</span>
          <span className={styles.precoPromocional}>Por: R$ 199,90</span>
        </div>
        <button className={styles.botaoReservar} type="button" onClick={onReservarKit} disabled={desabilitado}>
          Reservar meu kit
        </button>
      </div>
      <img
        className={styles.preview}
        src={embalagem}
        alt="Embalagem fictícia do kit Meu Primeiro Demon Core"
        loading="lazy"
      />
    </section>
  )
}
