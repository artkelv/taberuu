import padroes from "@/styles/padroesDegustacao.module.css";

import styles from "./degustarEditarNaoEncontrado.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import Image from "next/image";

export default function DegustarEditarNaoEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Você está EDITANDO uma degustação!</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrada!</strong> A degustação que voce esta querendo editar não foi encontrada. Busque a degustação novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Titulo</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Insira o titulo da degustação"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaDegustar"))}>Voltar</button>
          <button id={padroes.botaoDegustacao} onClick={() => dispatch(alteraEstado("degustarEditarEncontrada"))}>Buscar degustação</button>
        </div>
      </div>
    </div>
  )
}
