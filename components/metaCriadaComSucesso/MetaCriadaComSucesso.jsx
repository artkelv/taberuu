import styles from "./metaCriadaComSucesso.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaCriadaComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacao}>Você está CRIANDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
                <div>
                  <p id={styles.balao}>Meta criada com sucesso.</p>
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
