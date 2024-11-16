import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import padroes from "@/styles/padroesRestaurantes.module.css";
import styles from "./restauranteEditar.module.css";

import { useDispatch } from "react-redux";

export default function RestauranteEditar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está EDITANDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.atencao}>
            <p>ATENÇÃO: Para editarmos um restaurante, primeiro precisamos localiza-lo! Comece procurando pelo nome do restaurante abaixo.</p>
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
          <button id={padroes.botaoRestaurante} onClick={() => dispatch(alteraEstado("restauranteEditarNaoEncontrado"))}>Procurar Restaurante</button>
        </div>
      </div>
    </div>
  )
}
