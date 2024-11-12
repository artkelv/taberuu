import padroes from "@/styles/padroesFuncionarios.module.css";
import styles from "./funcionarioCriadoComSucesso.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function FuncionarioCriadoComSucesso() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está CRIANDO um funcionário</p>
        </div>
        <div id={styles.caixaBalao}>
          <div id={styles.balao}>
            <p>Funcionario criado com sucesso!</p>
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
