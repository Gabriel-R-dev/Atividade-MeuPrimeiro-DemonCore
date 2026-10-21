import { useState } from 'react'
import styles from './FAQ.module.css'

const PERGUNTAS = [
  {
    pergunta: 'O núcleo é real?',
    resposta:
      'Não. O núcleo é fictício, decorativo e inofensivo. Não tente abri-lo, fundi-lo ou usá-lo como fonte de energia.',
  },
  {
    pergunta: 'Preciso ter conhecimentos científicos?',
    resposta:
      'Não. O produto foi desenvolvido para pessoas que adoram ciência, mas também para quem nunca abriu um manual de instruções.',
  },
  {
    pergunta: 'O produto vem com manual?',
    resposta:
      'Sim. Um manual com 400 páginas de explicações desnecessárias (ou necessárias... Depende de você!).',
  },
  {
    pergunta: 'Posso presentear alguém?',
    resposta:
      'Pode. Nada diz "eu me importo" como presentear alguém com um kit científico fictício questionável.',
  },
  {
    pergunta: 'O certificado é reconhecido por alguma instituição?',
    resposta:
      'Não. O certificado de "Pequeno Gênio Suspeito" é válido apenas no Maranhão, e mesmo lá é discutível.',
  },
  {
    pergunta: 'Existe garantia?',
    resposta:
      'A garantia é limitada à nossa absoluta confiança no absurdo. Qualquer problema é por sua conta e risco.',
  },
]

export function FAQ() {
  const [aberta, setAberta] = useState(null)

  function alternar(index) {
    setAberta(aberta === index ? null : index)
  }

  return (
    <section className={styles.secao} id="faq" aria-label="Perguntas frequentes">
      <h2 className={styles.tituloSecao}>Perguntas que ninguém fez, respondidas de qualquer jeito</h2>
      <p className={styles.subtitulo}>
        FAQ interativo. As respostas deixam claro que tudo é ficção e humor.
      </p>
      <div className={styles.acordeao}>
        {PERGUNTAS.map((item, index) => {
          const estaAberta = aberta === index
          return (
            <article key={index} className={styles.item}>
              <button
                className={styles.botaoPergunta}
                onClick={() => alternar(index)}
                aria-expanded={estaAberta}
                aria-controls={`faq-resposta-${index}`}
              >
                <span className={styles.textoPergunta}>{item.pergunta}</span>
                <span className={styles.icone}>{estaAberta ? '−' : '+'}</span>
              </button>
              {estaAberta && (
                <p className={styles.resposta} id={`faq-resposta-${index}`}>
                  {item.resposta}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
