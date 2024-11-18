import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaExcluirNaoEncontrada.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice"

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import Image from "next/image";

export default function CategoriaExcluirNaoEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacaoExcluir}>Voce está EXCLUIR uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div id={styles.caixaNaoEncontrado}>
              <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
              <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrada!</strong> A categoria que voce esta querendo editar não foi encontrada. Busque a categoria novamente abaixo.</p>
            </div>
          <div id={styles.linha}></div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da categoria</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira nome da categoria"/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCategoria"))}>Voltar</button>
            <button id={padroes.botaoCategoriaExcluir} onClick={() => dispatch(alteraEstado("categoriaExcluirEncontrada"))}>Buscar categoria</button>
          </div>
      </div>
    </div>
  )
}
