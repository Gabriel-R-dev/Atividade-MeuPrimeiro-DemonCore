import simbolo from '../assets/simbolo.png'
import styles from './Cabecalho.module.css'

export function Cabecalho({ onAbrirReserva, reservaBloqueada }) {
  return (
    <header className={styles.cabecalho}>
      <img
        className={styles.logo}
        src={simbolo}
        alt="Símbolo radioativo do Meu Primeiro Demon Core"
      />
      <div className={styles.texto}>
        <p className={styles.marca}>Kits de Ciência Brinquedo</p>
        <h1 className={styles.titulo}>Meu Primeiro Demon Core</h1>
        <p className={styles.slogan}>O fenômeno físico em suas mãos!</p>
      </div>
      <nav className={styles.navegacao} aria-label="Navegação principal">
        <a href="#beneficios">Benefícios</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#prova-social">Avaliações</a>
        <a href="#oferta">Oferta</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className={styles.ctaGrupo}>
        <span className={styles.selo}>+8 anos</span>
        <button className={styles.cta} type="button" onClick={onAbrirReserva} disabled={reservaBloqueada}>
          Quero meu núcleo!
        </button>
      </div>
    </header>
  )
}
