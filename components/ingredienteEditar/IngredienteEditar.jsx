import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteEditar.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteEditar() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>ATENÇÃO</strong>: Para editarmos um ingrediente, primeiro precisamos localiza-lo! Comece procurando pelo nome do ingrediente abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do Ingrediente</label>
            <input className={padroes.entradaPequena} type="text" placeholder="insira o nome do ingrediente"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngrediente} onClick={() => dispatch(alteraEstado("ingredienteEditarNaoEncontrado"))}>Buscar ingrediente</button>
        </div>
      </div>
    </div>
  )
}
