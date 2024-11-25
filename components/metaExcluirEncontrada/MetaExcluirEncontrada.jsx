import styles from "./metaExcluirEncontrada.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaExcluirEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacaoExcluir}>Você está EXCLUINDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
              <div id={styles.descricao}>
                <p>Meta encontrada! Modifique-a usando os campos abaixo.</p>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Titulo da meta</label>
                <input id={styles.entradaPequenaPersonalizada} type="text" value={"Meta - 1"} readOnly/>
              </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
                <button id={padroes.botaoMetasExcluir} onClick={() => dispatch(alteraEstado("metaExcluidaComSucesso"))}>Excluir Meta</button>
            </div>
        </div>
    </div>
  )
}
