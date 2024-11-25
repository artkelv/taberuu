import styles from "./metaExcluirNaoEncontrada.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import Image from "next/image";

export default function MetaExcluirNaoEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacaoExcluir}>Você está EXCLUINDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
              <div id={styles.caixaNaoEncontrado}>
                <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
                <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrada!</strong> A Meta que voce esta querendo excluir não foi encontrada. Busque a meta novamente abaixo.</p>
              </div>
              <div id={styles.linha}></div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Titulo da meta</label>
                <input className={padroes.entradaPequena} type="text" Placeholder="Insira o titulo da meta"/>
              </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
                <button id={padroes.botaoMetasExcluir} onClick={() => dispatch(alteraEstado("metaExcluirEncontrada"))}>Buscar Meta</button>
            </div>
        </div>
    </div>
  )
}
