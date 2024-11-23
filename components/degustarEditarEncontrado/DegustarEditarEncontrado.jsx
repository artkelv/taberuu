import padroes from "@/styles/padroesDegustacao.module.css";
import styles from "./degustarEditarEncontrado.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function DegustarEditarEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Você está EDITANDO uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.degustacaoEncontrada}>Degustação encontrada! Edite-a usando os campos abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Titulo</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Insira o titulo da degustação"/>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Descrição da degustação</label>
            <input className={padroes.entradaMedia} type="text" placeholder="Descreva aqui a sua degustação"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaDegustar"))}>Voltar</button>
          <button id={padroes.botaoDegustacao} onClick={() => dispatch(alteraEstado("degustarEditadaComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
