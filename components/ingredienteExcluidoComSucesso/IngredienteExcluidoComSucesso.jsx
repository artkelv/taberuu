import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./IngredienteExcluidoComSucesso.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteExcluidoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO um ingrediente</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.balao}>
            <p>Ingrediente excluido com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
