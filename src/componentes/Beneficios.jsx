import styles from './Beneficios.module.css'

const BENEFICIOS = [
  {
    titulo: 'Você será brilhante',
    texto: '(Por alguns segundos...).',
  },
  {
    titulo: 'Desenvolve habilidades avançadas de apertar botões',
    texto: '(Que fazem kaboom!).',
  },
  {
    titulo: 'Inclui um manual com 400 páginas de explicações desnecessárias',
    texto: '(Ou necessárias... Depende de você!).',
  },
  {
    titulo: 'Certificado oficial de "Pequeno Gênio Suspeito"',
    texto: '(É válido apenas no Maranhão).',
  },
]

export function Beneficios() {
  return (
    <section className={styles.secao} id="beneficios" aria-label="Benefícios e diferenciais">
      <h2 className={styles.tituloSecao}>Por que (não) escolher o Demon Core?</h2>
      <p className={styles.subtitulo}>
        Quatro benefícios fictícios, claramente humorísticos, sem promessas reais de saúde,
        desempenho científico ou segurança.
      </p>
      <div className={styles.grid}>
        {BENEFICIOS.map((beneficio, index) => (
          <article key={index} className={styles.card}>
            <span className={styles.numero}>{index + 1}</span>
            <h3 className={styles.tituloCard}>{beneficio.titulo}</h3>
            <p className={styles.textoCard}>{beneficio.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
