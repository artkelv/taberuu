import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioExcluir.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioExcluir() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO um funcionário</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}>ATENÇÃO: Para excluirmos um funcionario, primeiro precisamos localiza-lo! Comece procurando pelo rg do funcionario abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">RG do funcionario</label>
              <input className={padroes.entradaPequena} type="text" placeholder="Insira o RG do Funcionario"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoConteudo}>
        <div id={padroes.caixaDeBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaFuncionario"))}>Voltar</button>
          <button id={padroes.botaoFuncionarioExcluir} onClick={() => dispatch(alteraEstado("funcionarioExcluirEncontrado"))}>Buscar Funcionario</button>
        </div>
      </div>
    </div>
  )
}
