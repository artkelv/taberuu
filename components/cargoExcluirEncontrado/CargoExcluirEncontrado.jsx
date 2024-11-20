import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoExcluirEncontrado.module.css";

export default function CargoExcluirEncontrado() {
    const dispatch = useDispatch();

    return (
    <div id={padroes.container}>
        <div>
            <div id={padroes.indicacaoExcluir} >
                <p>Voce está EXCLUINDO um cargo</p>
            </div>
            <div id={padroes.conteudo}>
                <div>
                    <p id={styles.descricao}>Cargo encontrado e pronto para ser excluido!</p>
                </div>
                <div className={padroes.caixaDasEntradas}>
                    <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
                    <input id={styles.entradaPequenaBloqueada}type="text" value={"Cozinheiro"} readOnly/>
                </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>   
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>voltar</button>
                <button id={padroes.botaoCargoExcluir} onClick={() => dispatch(alteraEstado("cargoExcluidoComSucesso"))}>Excluir Cargo</button>
            </div>
        </div>
    </div>
  )
}
