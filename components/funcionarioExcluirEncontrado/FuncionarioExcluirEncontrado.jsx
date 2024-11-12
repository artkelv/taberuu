import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioExcluir.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioExcluirEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está CRIANDO um funcionário</p>
        </div>
        <div id={padroes.conteudo}>
          <p id={styles.funcionarioEncontrado}>Funcionario encontrado!</p>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome</label>
            <input id={styles.entradaPequenaEspecifica} type="text" value={"Matheus"} readOnly/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoConteudo}>
        <div id={padroes.caixaDeBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaFuncionario"))}>Voltar</button>
          <button id={padroes.botaoFuncionarioExcluir} onClick={() => dispatch(alteraEstado("funcionarioExcluirNaoEncontrado"))}>Excluir Funcionario</button>
        </div>
      </div>
    </div>
  )
}
