import styles from "./filtroRelatorio.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useState } from "react";

import { useDispatch } from "react-redux";

export default function FiltroRelatorio() {
    const dispatch = useDispatch();
    const [statusFiltroRelatorio, setStatusFiltroRelatorio] = useState(false);

  return (
    <div id={styles.container}>
        <div>
            <div>
                <p id={styles.indicacao}>Tenha acesso a quantidade os dados em maos apenas usando o filtro abaixo!</p>
            </div>
            <div id={styles.conteudo}>
                <div id={styles.botoesDeNavegacao}>
                    <button className={styles.button} id={styles.buttonVoltarHome} onClick={() => dispatch(alteraEstado("voltar"))}>Voltar para home</button>
                    <button className={styles.button} id={styles.buttonIrFiltro} onClick={() => dispatch(alteraEstado("filtro"))}>Ir para filtro</button>
                </div>
                <div id={styles.caixaDeInformacoes}>
                    <h5 id={styles.tituloRelatorio}>Um relatório completo foi disponibilizado abaixo.</h5>
                    <p id={styles.descricaoRelatorio}>Se desejar imprimir todo este relatório, clique no botao verde no canto direito inferior, ou também filtre relatorios especificos usando o filtro no botão acima</p>
                </div>
                {statusFiltroRelatorio ? <div id={styles.containerRelatorio}>
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
                    <div className={styles.caixaDosRelatorio}>
                        <span className={styles.quantidade}>1053</span>
                        <span className={styles.relacionado}>Ingredientes</span>
                    </div>
                    <div className={styles.caixaDosRelatorio}>
                        <span className={styles.quantidade}>307</span>
                        <span className={styles.relacionado}>Funcionarios</span>
                    </div>
                </div> : null}
            </div>
        </div>
        <div id={styles.segundoContainer}>
            <div id={styles.caixaDosBotoes}>
              <button id={styles.botaoImprimirRelatorio} onClick={() => setStatusFiltroRelatorio(true)}>Imprimir relatório</button>
            </div>
        </div>
    </div>
  )
}
