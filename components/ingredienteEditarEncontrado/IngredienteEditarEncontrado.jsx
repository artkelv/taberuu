import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteEditarNaoEncontrado.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteEditarEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.ingredienteEncontrado}>Ingrediente encontrado! Edite-o usando os campos abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do ingrediente *</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Insira o nome do ingrediente"/>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Descrição do Ingrediente</label>
            <input className={padroes.entradaMedia} type="text" placeholder="Descreva o ingrediente"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngrediente} onClick={() => dispatch(alteraEstado("ingredienteEditadoComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
