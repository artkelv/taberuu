import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteEditadoComSucesso.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteEditadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
            <div id={styles.balao}>
            <p>Ingrediente EDITADO com sucesso!</p>
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
