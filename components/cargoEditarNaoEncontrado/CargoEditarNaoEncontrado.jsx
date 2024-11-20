import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import Image from "next/image";

import imgNotFound from "@/public/img/nao_encontrado.jpg";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoEditarNaoEncontrado.module.css";

export default function CargoEditarNaoEncontrado() {

  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
          <p>Voce está EDITANDO um cargo!</p>
        </div>
        <div id={styles.conteudoPersonalizado}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={styles.imgNaoEncontrado} src={imgNotFound}/>
            <p id={styles.textoNaoEncontrado}><strong id={styles.descricaoNaoEncontrado}>Não encontrado!</strong> O cargo que voce esta querendo editar não foi encontrado. Busque o cargo novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div id={styles.caixaDasEntradasPersonalizada}>
            <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
            <input className={padroes.entradaPequena} type="text" placeholder='Insira o nome do cargo'/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
          <button id={padroes.botaoCargo} onClick={() => dispatch(alteraEstado("cargoEditadoComSucesso"))}>Buscar Cargo</button>
        </div>
      </div>
        
    </div>
  )
}
