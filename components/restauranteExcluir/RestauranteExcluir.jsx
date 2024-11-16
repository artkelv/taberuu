import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./restauranteExcluir.module.css";
import padroes from "@/styles/padroesRestaurantes.module.css";

import { useDispatch } from "react-redux";

export default function RestauranteExcluir() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}>ATENÇÃO: Para excluirmos um restaurante, primeiro precisamos localiza-lo! Comece procurando pelo nome do restaurante.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do restaurante* </label>
            <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome do restaurante"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
          <button id={padroes.botaoRestauranteExcluir} onClick={() => dispatch(alteraEstado("restauranteExcluirNaoEncontrado"))}>Procurar Restaurante</button>
        </div>
      </div>
    </div>
  )
}
