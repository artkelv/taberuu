import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./restauranteCriadoComSucesso.module.css";
import padroes from "@/styles/padroesRestaurantes.module.css"

import { useDispatch } from "react-redux";

export default function RestauranteCriadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está CRIANDO um restaurante </p>
        </div>
      	<div id={padroes.conteudo}>
          <div id={styles.balao}>
            <p>Restaurante criado com sucesso!</p>
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