import { useState } from 'react'
import { Botao } from './Botao.jsx'
import styles from './PainelControle.module.css'

const LIMITE = 100
const PASSO = 10

export function PainelControle({ _reservaBloqueada, setReservaBloqueada }) {
  const [ligado, setLigado] = useState(false)
  const [energia, setEnergia] = useState(0)
  const [trava, setTrava] = useState(true)
  const [explodiu, setExplodiu] = useState(false)

  const alerta = ligado && energia >= LIMITE
  const bloqueado = !ligado || trava || explodiu
  const podeAumentar = ligado && !trava && !explodiu && energia < LIMITE

  let status = 'Desligado'
  if (explodiu) {
    status = 'Explodido'
  } else if (ligado) {
    status = alerta ? 'Superaquecido' : 'Operando'
  }

  function corEnergia() {
    if (energia >= LIMITE) return styles.corCritica
    if (energia >= 50) return styles.corAlerta
    return styles.corNormal
  }

  function alterarEnergia(delta) {
    if (explodiu) return
    setEnergia((valor) => {
      const novo = Math.min(LIMITE, Math.max(0, valor + delta))
      if (novo >= LIMITE && delta > 0) {
        setExplodiu(true)
        if (setReservaBloqueada) setReservaBloqueada(true)
      }
      return novo
    })
  }

  function reiniciar() {
    setLigado(false)
    setEnergia(0)
    setTrava(true)
    setExplodiu(false)
    if (setReservaBloqueada) setReservaBloqueada(false)
  }

  return (
    <section className={styles.painel} data-alerta={alerta} data-explodiu={explodiu}>
      <h2 className={styles.titulo}>Painel de controle</h2>
      <p className={styles.instrucao}>
        Ligue o reator, desative a trava e use INPUT/OUTPUT para ajustar a energia do núcleo.
        Cuidado: 100% é considerado crítico.
      </p>

      <div className={styles.leitura}>
        <span className={styles.rotulo}>Energia do núcleo</span>
        <strong className={[styles.valor, corEnergia()].filter(Boolean).join(' ')}>
          {energia}%
        </strong>
        <span className={styles.status}>{status}</span>
      </div>

      <div className={styles.barra}>
        <div className={styles.preenchimento} style={{ width: `${energia}%` }} />
      </div>

      <div className={styles.controles}>
        <Botao
          variante={ligado ? 'perigo' : 'primario'}
          onClick={() => setLigado((valor) => !valor)}
          desabilitado={explodiu}
        >
          POWER: {ligado ? 'ON' : 'OFF'}
        </Botao>
        <Botao
          variante="secundario"
          desabilitado={bloqueado}
          onClick={() => alterarEnergia(-PASSO)}
        >
          INPUT
        </Botao>
        <Botao
          variante="secundario"
          desabilitado={!podeAumentar}
          onClick={() => alterarEnergia(PASSO)}
        >
          OUTPUT
        </Botao>
        <Botao
          variante="aviso"
          ativo={trava}
          desabilitado={explodiu}
          onClick={() => setTrava((valor) => !valor)}
        >
          Trava: {trava ? 'ativa' : 'inativa'}
        </Botao>
      </div>

      {alerta && !explodiu && (
        <p className={styles.alerta} role="alert">
          ATENÇÃO: risco de radiação. Reduza a energia do núcleo agora!
        </p>
      )}

      {explodiu && (
        <div className={styles.explosao}>
          <h3 className={styles.tituloExplosao}>O reator explodiu!</h3>
          <p className={styles.msgExplosao} role="alert">
            Você explodiu o reator, precisa ler o manual novamente...
          </p>
          <Botao variante="primario" onClick={reiniciar}>
            Reiniciar painel
          </Botao>
        </div>
      )}
    </section>
  )
}
