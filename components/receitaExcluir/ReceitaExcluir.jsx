import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./receitaExcluir.module.css";
import padroes from "@/styles/padroesReceitas.module.css";

import { useDispatch } from "react-redux";

export default function ReceitaExcluir() {
  const dispatch = useDispatch();

  return (
    <div id={styles.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.descricao}>
            <p>ATENÇÃO: Para EXCLUIRMOS uma receita, primeiro precisamos localiza-la! Comece procurando pelo nome da receita abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">ID da receita</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Insira o ID da receita"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaReceita"))}>Voltar</button>
          <button id={padroes.botaoReceitaExcluir} onClick={() => dispatch(alteraEstado("receitaExcluirNaoEncontrada"))}>Buscar receita</button>
        </div>
      </div>
    </div>
  )
}
