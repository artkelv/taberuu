import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteExcluirNaoEncontrado.module.css";

import Image from "next/image";
import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteExcluirNaoEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXLUINDO um ingrediente</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrado!</strong> A receita que voce esta querendo editar não foi encontrada. Busque a receita novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da Receita</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome da receita"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngredienteExcluir} onClick={() => dispatch(alteraEstado("ingredienteExcluirEncontrado"))}>Excluir ingrediente</button>
        </div>
      </div>
    </div>
  )
}
