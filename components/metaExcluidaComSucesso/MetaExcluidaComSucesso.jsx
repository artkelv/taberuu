import styles from "./metaExcluidaComSucesso.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaExcluidaComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacaoExcluir}>Você está EXCLUINDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
                <div>
                  <p id={styles.balao}>Meta excluida com sucesso.</p>
                </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
            </div>
        </div>
    </div>
  )
}
