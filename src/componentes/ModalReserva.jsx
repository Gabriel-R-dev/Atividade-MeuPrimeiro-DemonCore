import { useState } from 'react'
import { Botao } from './Botao.jsx'
import styles from './ModalReserva.module.css'

const PREFERENCIAS = ['Caixa clássica', 'Edição colecionador', 'Embalagem presente']

export function ModalReserva({ aberta, fechar }) {
  const [dados, setDados] = useState({ nome: '', email: '', embalagem: '' })
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  function alterarCampo(campo, valor) {
    setDados((atual) => ({ ...atual, [campo]: valor }))
    if (erros[campo]) {
      setErros((atual) => ({ ...atual, [campo]: null }))
    }
  }

  function validar() {
    const novosErros = {}
    if (!dados.nome.trim()) novosErros.nome = 'Informe seu nome.'
    if (!dados.email.trim()) novosErros.email = 'Informe um e-mail fictício.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
      novosErros.email = 'Informe um e-mail válido.'
    }
    if (!dados.embalagem) novosErros.embalagem = 'Escolha uma preferência de embalagem.'
    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function handleEnviar(event) {
    event.preventDefault()
    if (!validar()) return
    setEnviado(true)
  }

  if (!aberta) return null

  return (
    <>
      <div
        className={styles.overlay}
        onClick={fechar}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && fechar()}
        aria-label="Fechar modal"
      />
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Reserva do Demon Core" onClick={(e) => e.stopPropagation()}>
        <button className={styles.fechar} onClick={fechar} aria-label="Fechar">
          ×
        </button>
        {enviado ? (
          <div className={styles.conteudo}>
            <div className={styles.sucesso} role="status" aria-live="polite">
              ✔ Reserva confirmada!
            </div>
            <p className={styles.mensagem}>
              A compra/Reserva é fictícia e nada aconteceu, você não vai receber nada. Nenhum
              dado foi enviado para servidores, nenhuma cobrança real foi realizada e o produto é
              fictício. Volte sempre!
            </p>
            <Botao variante="primario" onClick={fechar}>
              Fechar
            </Botao>
          </div>
        ) : (
          <form className={styles.conteudo} onSubmit={handleEnviar} noValidate>
            <h2 className={styles.titulo}>Reserve o seu núcleo</h2>
            <p className={styles.subtitulo}>
              Preencha os campos abaixo. Esta é uma reserva fictícia, apenas para demonstração.
            </p>
            <div className={styles.campo}>
              <label className={styles.label}>Nome completo</label>
              <input
                className={styles.input + (erros.nome ? ' ' + styles.erro : '')}
                type="text"
                placeholder="Seu nome"
                value={dados.nome}
                onChange={(e) => alterarCampo('nome', e.target.value)}
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? 'erro-nome' : undefined}
              />
              {erros.nome && (
                <span className={styles.msgErro} id="erro-nome" role="alert">
                  {erros.nome}
                </span>
              )}
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>E-mail fictício</label>
              <input
                className={styles.input + (erros.email ? ' ' + styles.erro : '')}
                type="email"
                placeholder="seu@email.com"
                value={dados.email}
                onChange={(e) => alterarCampo('email', e.target.value)}
                aria-invalid={!!erros.email}
                aria-describedby={erros.email ? 'erro-email' : undefined}
              />
              {erros.email && (
                <span className={styles.msgErro} id="erro-email" role="alert">
                  {erros.email}
                </span>
              )}
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Preferência de embalagem</label>
              <select
                className={styles.select + (erros.embalagem ? ' ' + styles.erro : '')}
                value={dados.embalagem}
                onChange={(e) => alterarCampo('embalagem', e.target.value)}
                aria-invalid={!!erros.embalagem}
                aria-describedby={erros.embalagem ? 'erro-embalagem' : undefined}
              >
                <option value="">Escolha uma opção</option>
                {PREFERENCIAS.map((opcao) => (
                  <option key={opcao} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
              {erros.embalagem && (
                <span className={styles.msgErro} id="erro-embalagem" role="alert">
                  {erros.embalagem}
                </span>
              )}
            </div>
            <div className={styles.acoes}>
              <Botao variant="secundario" type="button" onClick={fechar}>
                Cancelar
              </Botao>
              <Botao variant="primario" type="submit">
                Reservar (demonstração)
              </Botao>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
