import { useDispatch } from "react-redux";

import styles from "./cargoExcluirNaoEncontrado.module.css";
import padroes from "@/styles/padroes.module.css";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CargoExcluirNaoEncontrado() {
    const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div id={padroes.indicacaoExcluir}>
                <p>Voce está EXCLUINDO um cargo!</p>
            </div>
            <div id={padroes.conteudo}>
                <div id={styles.caixaNaoEncontrado}>
                    <p id={styles.tituloNaoEncontrado}>Cargo NÃO encontrado!</p>
                    <p id={styles.subTituloNaoEncontrado}>Busque novamente usando o campo abaixo.</p>
                </div>
                <div className={padroes.caixaDasEntradas}>
                    <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
                    <input className={padroes.entradaPequena} type="text" placeholder="Insira o nome do cargo" />
                </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>   
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>voltar</button>
                <button id={styles.botaoProcurar} onClick={() => dispatch(alteraEstado("cargoExcluirEncontrado"))}>Procurar cargo</button>
            </div>
        </div>
    </div>
  )
}
