import { useDispatch } from "react-redux";

import styles from "./cargoExcluirNaoEncontrado.module.css";
import padroes from "@/styles/padroes.module.css";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CargoExcluirNaoEncontrado() {
    const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div id={padroes.indicacao} className={padroes.indicacaoExcluir}>
                <p>Voce está EXCLUINDO um cargo!</p>
            </div>
            <div id={padroes.primeiroConteudo}>
                <div id={styles.caixaNaoEncontrado}>
                    <p id={styles.tituloNaoEncontrado}>Cargo NÃO encontrado!</p>
                    <p id={styles.subTituloNaoEncontrado}>Busque novamente usando o campo abaixo.</p>
                </div>
                <div>
                    <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
                    <div>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira o nome do cargo" />
                        <button id={styles.botaoProcurar} onClick={() => dispatch(alteraEstado("cargoExcluirEncontrado"))}>Procurar cargo</button>
                    </div>
                </div>
            </div>
        </div>
        <div id={padroes.caixaDeBotoes}>   
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>voltar</button>
        </div>
    </div>
  )
}
