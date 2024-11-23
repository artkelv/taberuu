import padroes from "@/styles/padroesDegustacao.module.css";

import styles from "./degustarExcluirEncontrado.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function DegustarExcluirEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Você está EXCLUINDO uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.degustacaoEncontrada}>Degustação encontrada! Exclua-a usando o botão no canto inferior direito abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome da Degustação</label>
            <input id={styles.entradaPequenaPersonalizada} type="text" value={"Degustação - Pizza"} readOnly/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaDegustar"))}>Voltar</button>
          <button id={padroes.botaoDegustacaoExcluir} onClick={() => dispatch(alteraEstado("degustarExcluidaComSucesso"))}>Excluir degustação</button>
        </div>
      </div>
    </div>
  )
}
