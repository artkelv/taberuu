import styles from "./metaEditarEncontrada.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaEditarEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacao}>Você está EDITANDO uma Meta</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.metaEncontrada}>Meta encontrada! Edite-a usando os campos abaixo.</p>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Titulo da meta</label>
              <input className={padroes.entradaPequena} type="text" placeholder="Digite o titulo da meta"/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
            <button id={padroes.botaoMetas} onClick={() => dispatch(alteraEstado("metaEditadaComSucesso"))}>Aplicar mudanças</button>
          </div>
      </div>
    </div>
  )
}
