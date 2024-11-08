import styles from "./styles.module.css";

export default function MenuPrincipal() {
  return (
    <div id={styles.conteudo}>
        <div id={styles.boxBtn}>
            <button id={styles.btnRelatorio}>Imprimir Relatorio</button>
            <button id={styles.btnfiltro}>Filtro</button>
        </div>
        <div id={styles.boxContainer}>
            <div id={styles.boxCardsUnico}>
                <h4 className={styles.tetxoTituloCards}>10</h4>
                <p className={styles.tetxoCards}>Cargos criados</p>
            </div>
            <div className={styles.boxCards}>
                <h4 className={styles.tetxoTituloCards}>20</h4>
                <p className={styles.tetxoCards}>Funcionários</p>
            </div>
            <div className={styles.boxCards}>
                <h4 className={styles.tetxoTituloCards}>505</h4> 
                <p className={styles.tetxoCards}>Receitas</p>
            </div>
            <div className={styles.boxCards}>
                <h4 className={styles.tetxoTituloCards}>75</h4> 
                <p className={styles.tetxoCards}>Ingredientes</p>
            </div>
            <div className={styles.boxCards}>
                <h4 className={styles.tetxoTituloCards}>896</h4>
                <p className={styles.tetxoCards}>Restaurantes</p>
            </div>
        </div>
        <h4 id={styles.tituloFinal}>
            <strong id={styles.subTituloFinal}>ADMINISTRADOR MASTER</strong>
            , você tem o poder de criar, editar e excluir
            absolutamente qualquer coisa!
        </h4>
        <p id={styles.textofinal}>
            Use o menu lateral para navegar entre as funcionalidades.
        </p>
    </div>
  )
}
