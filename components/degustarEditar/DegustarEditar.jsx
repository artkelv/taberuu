import padroes from "@/styles/padroesDegustacao.module.css";

import styles from "./degustarEditar.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function DegustarEditar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Você está EDITANDO uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}>ATENÇÃO: Para editarmos uma Degustação, primeiro precisamos localiza-la! Comece procurando pelo nome da degustação abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome da Degustação</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Digite o nome da Degustação"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaDegustar"))}>Voltar</button>
          <button id={padroes.botaoDegustacao} onClick={() => dispatch(alteraEstado("degustarEditarNaoEncontrada"))}>Buscar degustação</button>
        </div>
      </div>
    </div>
  )
}
