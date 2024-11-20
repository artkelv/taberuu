import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import styles from "./cargoExcluir.module.css"; 
import padroes from "@/styles/padroes.module.css";

import { useDispatch } from "react-redux";

export default function CargoExcluir() {
    const dispatch = useDispatch();

return (
    <div id={padroes.container}>
        <div id={styles.subContainer}>
            <div>
                <div id={padroes.indicacaoExcluir}>
                    <p>Voce está EXCLUINDO um cargo</p>
                </div>
                <div id={styles.atencao}>
                    <p>ATENÇÃO: Para excluirmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
                </div>
                <div id={styles.linha}></div>
                <div id={styles.caixaExclusiva}>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira o nome do cargo"/>
                    </div>
                </div>
            </div>
            <div id={padroes.segundoContainer}>
                <div id={padroes.caixaDosBotoes}>
                    <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
                    <button id={padroes.botaoCargoExcluir} onClick={() => dispatch(alteraEstado("cargoExcluirNaoEncontrado"))}>Procurar cargo</button>
                </div>
            </div>
        </div>
    </div>
    )
}
