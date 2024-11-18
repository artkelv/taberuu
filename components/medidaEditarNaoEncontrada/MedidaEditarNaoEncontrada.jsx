import padroes from "@/styles/padroesMedidas.module.css";
import styles from "./medidaEditarNaoEncontrada.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import Image from "next/image";

export default function MedidaEditarNaoEncontrada() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está EDITANDO uma medida</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrada!</strong> A medida que voce esta querendo editar não foi encontrado. Busque a medida novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome da medida</label>
            <input className={padroes.entradaPequena} type="text" Placeholder="Insira nome da medida"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
          <button id={padroes.botaoMedida} onClick={() => dispatch(alteraEstado("medidaEditarEncontrada"))}>Buscar Medida</button>
        </div>
      </div>
    </div>
  )
}
