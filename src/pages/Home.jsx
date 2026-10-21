import conteudo from '../assets/conteudo.jpeg'
import diversao from '../assets/diversao.jpeg'
import { Hero } from '../componentes/Hero.jsx'
import { Beneficios } from '../componentes/Beneficios.jsx'
import { ComoFunciona } from '../componentes/ComoFunciona.jsx'
import { ProvaSocial } from '../componentes/ProvaSocial.jsx'
import { Oferta } from '../componentes/Oferta.jsx'
import { FAQ } from '../componentes/FAQ.jsx'
import { CTAFinal } from '../componentes/CTAFinal.jsx'
import { Card } from '../componentes/Card.jsx'
import styles from './Home.module.css'

export function Home({ onAbrirReserva, reservaBloqueada }) {
  return (
    <>
      <Hero onReservarKit={onAbrirReserva} desabilitado={reservaBloqueada} />

      <section className={styles.conteudoSecao} id="conteudo" aria-label="Conteúdo da embalagem">
        <h2 className={styles.tituloSecao}>Conteúdo da embalagem</h2>
        <p className={styles.subtitulo}>
          Tudo o que você recebe (e muito mais do que precisa). Legendas curtas e engraçadas
          incluídas.
        </p>
        <div className={styles.grid}>
          <Card imagem={conteudo} alt="Todo o conteúdo do kit Demon Core" titulo="O que vem na caixa">
            <ul>
              <li>Núcleo luminoso (apenas para decoração, não brilha de verdade)</li>
              <li>Botões decorativos (apertar é opcional, mas divertido)</li>
              <li>Gráficos incompreensíveis (decoram a parede da sua sala)</li>
              <li>Manual com 400 páginas de explicações desnecessárias</li>
            </ul>
          </Card>
          <Card imagem={diversao} alt="Jovens montando o kit em equipe" titulo="Diversão atômica">
            <p>
              Perfeito para tardes com amigos: quantos cientistas são necessários para desligar
              uma única chave? Descubra sem supervisão de um adulto (por sua conta e risco).
            </p>
          </Card>
        </div>
      </section>

      <Beneficios />
      <ComoFunciona />

      <ProvaSocial />
      <Oferta onComprar={onAbrirReserva} desabilitado={reservaBloqueada} />
      <FAQ />
      <CTAFinal onReservar={onAbrirReserva} desabilitado={reservaBloqueada} />
    </>
  )
}
