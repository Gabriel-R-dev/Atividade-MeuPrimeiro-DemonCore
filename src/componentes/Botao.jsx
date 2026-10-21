import styles from './Botao.module.css'

export function Botao({ children, onClick, variante = 'primario', ativo = false, desabilitado = false }) {
  const classes = [styles.botao, styles[variante], ativo ? styles.ativo : '']
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} onClick={onClick} disabled={desabilitado}>
      {children}
    </button>
  )
}
