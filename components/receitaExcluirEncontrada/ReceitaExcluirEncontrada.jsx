import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./receitaExcluirEncontrada.module.css";
import padroes from "@/styles/padroesReceitas.module.css";

import { useDispatch } from "react-redux";

export default function ReceitaExcluirEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={styles.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está CRIANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.descricaoReceitaEncontrada}>Receita encontrada! Clique no botão "excluir receita" no canto inferior direito se realmente deseja exclui-la.</p>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">ID da receita</label>
              <input id={styles.entradaPequenaPersonalizada} value={"Bolo fe fubá"} type="text" placeholder="Insira o ID da receita" readOnly/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaReceita"))}>Voltar</button>
          <button id={padroes.botaoReceitaExcluir} onClick={() => dispatch(alteraEstado("receitaExcluidaComSucesso"))}>Excluir receita</button>
        </div>
      </div>
    </div>
  )
}
