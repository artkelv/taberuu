
import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteExcluir.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteExcluir() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO um ingrediente</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>ATENÇÃO!</strong> para excluirmos um ingrediente, primeiro precisamos localiza-lo! Comece procurando pelo nome do ingrediente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do Ingrediente</label>
            <input className={padroes.entradaPequena} type="text" placeholder="insira o nome do ingrediente"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngredienteExcluir} onClick={() => dispatch(alteraEstado("ingredienteExcluirNaoEncontrado"))}>Buscar ingrediente</button>
        </div>
      </div>
    </div>
  )
}
