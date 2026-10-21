import styles from './ProvaSocial.module.css'

const DEPOIMENTOS = [
  {
    texto: 'Meu filho agora faz perguntas que nem o suporte técnico consegue responder.',
    autor: 'Jane Doe.',
  },
  {
    texto: 'O manual mudou minha vida. Ainda não consegui passar da página 12.',
    autor: 'João Ninguém.',
  },
  {
    texto: 'A embalagem Dissolveu!',
    autor: 'Serj Tankian.',
  },
  {
    texto: 'Fluxo contínuo',
    autor: 'Eddie Vedder.',
  },
]

export function ProvaSocial() {
  return (
    <section className={styles.secao} id="prova-social" aria-label="Prova social">
      <h2 className={styles.tituloSecao}>O que dizem os cientistas (supostamente)</h2>
      <p className={styles.subtitulo}>
        Depoimentos fictícios, parte da sátira. Não utilize pessoas reais nem avaliações
        apresentadas como autênticas.
      </p>
      <div className={styles.grid}>
        {DEPOIMENTOS.map((depoimento, index) => (
          <article key={index} className={styles.card}>
            <p className={styles.texto}>
              {depoimento.texto}
            </p>
            <p className={styles.autor}>{depoimento.autor}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
