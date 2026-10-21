import styles from './Oferta.module.css'

const ITENS_KIT = [
  'Núcleo de demonstração (luminoso, meramente decorativo)',
  'Chaves e acessórios laboratoriais',
  'Manual com 400 páginas de explicações desnecessárias',
  'Avisos de segurança destacáveis',
  'Certificado de Cientista Júnior',
]

export function Oferta({ onComprar, desabilitado }) {
  return (
    <section className={styles.secao} id="oferta" aria-label="Oferta e preço">
      <h2 className={styles.tituloSecao}>Oferta especial por tempo (inexistente)</h2>
      <div className={styles.precos}>
        <span className={styles.precoAntigo}>De: R$ 349,90</span>
        <span className={styles.precoPromocional}>Por: R$ 199,90</span>
      </div>
      <p className={styles.subtitulo}>
        Leve para casa o kit completo com bônus absurdo incluído.
      </p>
      <div className={styles.lista}>
        <h3 className={styles.tituloLista}>Acompanha o kit:</h3>
        <ul>
          {ITENS_KIT.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.bonus}>
        <span className={styles.seloBonus}>BÔNUS</span>
        <h3 className={styles.tituloBonus}>Certificado de genialidade</h3>
        <p className={styles.textoBonus}>
          Um certificado oficial de genialidade, impresso em papel brilhante. Reconhecimento
          absoluto em nenhum lugar.
        </p>
      </div>
      <button className={styles.botaoComprar} type="button" onClick={onComprar} disabled={desabilitado}>
        Comprar (simulada)
      </button>
    </section>
  )
}
