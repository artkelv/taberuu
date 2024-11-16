import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import padroes from "@/styles/padroesRestaurantes.module.css";
import styles from "./restauranteExcluirNaoEncontrado.module.css";

import { useDispatch } from "react-redux";

import Image from "next/image";
import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

export default function RestauranteExcluirNaoEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrado!</strong> O restaurante que voce esta querendo excluir não foi encontrado. Busque o restaurante novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome do restaurante</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome do restaurante"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
          <button id={padroes.botaoRestauranteExcluir} onClick={() => dispatch(alteraEstado("restauranteExcluirEncontrado"))}>Buscar Restaurante</button>
        </div>
      </div>
    </div>
  )
}
