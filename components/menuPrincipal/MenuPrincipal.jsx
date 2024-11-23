import styles from "./styles.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux";

export default function MenuPrincipal() {
    const dispatch = useDispatch();

    return (
        <div id={styles.conteudo}>
            <div id={styles.boxBtn}>
                <button id={styles.btnRelatorio} onClick={() => dispatch(alteraEstado("filtroRelatorio"))}>Imprimir Relatorio</button>
                <button id={styles.btnfiltro} onClick={() => dispatch(alteraEstado("filtro"))}>Filtro</button>
            </div>
            <div id={styles.boxContainer}>
                <div id={styles.boxCardsUnico}>
                    <h4 className={styles.tetxoTituloCards}>10</h4>
                    <p className={styles.tetxoCards}>Cargos</p>
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
                <div className={styles.boxCards}>
                    <h4 className={styles.tetxoTituloCards}>68</h4> 
                    <p className={styles.tetxoCards}>Medidas</p>
                </div>
                <div className={styles.boxCards}>
                    <h4 className={styles.tetxoTituloCards}>12</h4>
                    <p className={styles.tetxoCards}>Categorias</p>
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
