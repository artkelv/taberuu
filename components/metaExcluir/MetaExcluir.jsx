import styles from "./metaExcluir.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaExcluir() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacaoExcluir}>Você está EXCLUINDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
              <div id={styles.descricao}>
                <p>ATENÇÃO: Para excluirmos uma meta, primeiro precisamos localiza-la! Comece procurando pelo titulo da meta abaixo.</p>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Titulo da meta</label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira o titulo da meta"/>
              </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
                <button id={padroes.botaoMetasExcluir} onClick={() => dispatch(alteraEstado("metaExcluirNaoEncontrada"))}>Buscar Meta</button>
            </div>
        </div>
    </div>
  )
}
