import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import padroes from "@/styles/padroesRestaurantes.module.css";
import styles from "./restauranteEditadoComSucesso.module.css";

import { useDispatch } from "react-redux";

export default function RestauranteEditadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está EDITANDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.balao}>
            <p>Restaurante editado com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
