import { useState } from 'react'
import { Cabecalho } from './componentes/Cabecalho.jsx'
import { Home } from './pages/Home.jsx'
import { ModalReserva } from './componentes/ModalReserva.jsx'
import { PainelControle } from './componentes/PainelControle.jsx'
import styles from './App.module.css'

function App() {
  const [reservaAberta, setReservaAberta] = useState(false)
  const [reservaBloqueada, setReservaBloqueada] = useState(false)

  function abrirReserva() {
    if (reservaBloqueada) return
    setReservaAberta(true)
  }

  function fecharReserva() {
    setReservaAberta(false)
  }

  return (
    <div className={styles.app}>
      <Cabecalho onAbrirReserva={abrirReserva} reservaBloqueada={reservaBloqueada} />
      <main className={styles.conteudo}>
        <Home onAbrirReserva={abrirReserva} reservaBloqueada={reservaBloqueada} />
      </main>
      <PainelControle reservaBloqueada={reservaBloqueada} setReservaBloqueada={setReservaBloqueada} />
      <ModalReserva aberta={reservaAberta} fechar={fecharReserva} />
      <footer className={styles.rodape}>
        Meu Primeiro Demon Core · projeto frontend de estudo (Vite + React)
      </footer>
    </div>
  )
}

export default App
