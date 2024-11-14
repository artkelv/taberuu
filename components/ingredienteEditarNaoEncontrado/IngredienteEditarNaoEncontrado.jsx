import padroes from "@/styles/padroesIngrediente.module.css";
import styles from "./ingredienteEditarNaoEncontrado.module.css";

import Image from "next/image";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function IngredienteEditarNaoEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO um ingrediente</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrado!</strong> O ingrediente que voce esta querendo editar não foi encontrado. Busque o ingrediente novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome do ingrediente</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome do ingrediente"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaIngrediente"))}>Voltar</button>
          <button id={padroes.botaoIngrediente} onClick={() => dispatch(alteraEstado("ingredienteEditarEncontrado"))}>Buscar ingrediente</button>
        </div>
      </div>
    </div>
  )
}
