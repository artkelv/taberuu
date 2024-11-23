import padroes from "@/styles/padroesDegustacao.module.css";
import styles from "./degustarEditadoComSucesso.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function DegustarEditadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Você está criando uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.balao}>Degustação EDITADA com sucesso</p>
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
