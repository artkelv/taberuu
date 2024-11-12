import padroes from "@/styles/padroesFuncionarios.module.css";
import styles from "./funcionarioEditadoComSucesso.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function FuncionarioEditadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO um funcionário</p>
        </div>
        <div id={styles.caixaBalao}>
          <div id={styles.balao}>
            <p>Funcionario EDITADO com sucesso!</p>
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
