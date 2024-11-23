import padroes from "@/styles/padroesDegustacao.module.css";
import styles from "./degustarExcluidoComSucesso.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function DegustarExcluidoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Você está EXCLUINDO uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.balao}>Degustação EXCLUIDA com sucesso</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaDegustar"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
