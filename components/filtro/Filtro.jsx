import styles from "./filtro.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useState } from "react";

import { useDispatch } from "react-redux";

export default function Filtro() {
  const dispatch = useDispatch();
  const [statusFiltro, setStatusFiltro] = useState();

  return(
    <div id={styles.container}>
      <div>
        <div>
          <p id={styles.indicacao}>Tenha todos os dados em maos apenas usando o filtro abaixo!</p>
        </div>
        <div id={styles.conteudo}>
          <div>
            <h4 id={styles.titulo}>Use o filtro abaixo para obter um item especifico!</h4>
            <p id={styles.descricao}>O filtro abaixo irá retornar a quantidade dentro de cada item, fique a vontade para trocar o filtro e recomeçar novamente. </p>
            <div id={styles.caixaPrincipal}>
              <select name="" id={styles.selection}>
                <option value="">Escolha um item</option>
              </select>
              <button id={styles.btnAplicarFiltro} onClick={() => setStatusFiltro(true)}>Aplicar filtro</button>
              <span id={styles.ou}>ou</span>
              <button id={styles.btnImprimirRelatorio} onClick={() => dispatch(alteraEstado("filtroRelatorio"))}>Imprimir relatório completo</button>
            </div>
            {statusFiltro ? <div id={styles.containerRelatorio}>
              <div className={styles.caixaDosRelatorio}>
                  <span className={styles.quantidade}>23</span>
                  <span className={styles.relacionado}>Cargos</span>
              </div>
              <div className={styles.caixaDosRelatorio}>
                  <span className={styles.quantidade}>103</span>
                  <span className={styles.relacionado}>Receitas</span>
              </div>
              <div className={styles.caixaDosRelatorio}>
                  <span className={styles.quantidade}>20</span>
                  <span className={styles.relacionado}>Restaurantes</span>
              </div>
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
