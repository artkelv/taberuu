import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteExcluirEncontrado.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteExcluirEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.ingredienteEncontrado}>Ingrediente Encontrado! Use o botao no canto inferior direito para exclui-lo</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do Ingrediente</label>
            <input className={styles.entradaPequenaPersonalizada} type="text" value={"Ovos"} eadOnly/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngredienteExcluir} onClick={() => dispatch(alteraEstado("ingredienteExcluidoComSucesso"))}>Excluir ingrediente</button>
        </div>
      </div>
    </div>
  )
}
