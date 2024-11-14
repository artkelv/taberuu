import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteCriadoComSucesso.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteCriadoComSucesso() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está CRIANDO um ingrediente</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.balao}>
            <p>Ingrediente criado com sucesso!</p>
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
