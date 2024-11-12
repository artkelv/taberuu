import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioExcluidoComSucesso.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioExcluidoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO um funcionário</p>
        </div>
        <div id={styles.caixaBalao}>
          <div id={styles.balao}>
            <p>Funcionario EXCLUIDO com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoConteudo}>
        <div id={styles}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaFuncionario"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
