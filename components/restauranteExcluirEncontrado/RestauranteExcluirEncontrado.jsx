import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import padroes from "@/styles/padroesRestaurantes.module.css";
import styles from "./restauranteExcluirEncontrado.module.css";

import { useDispatch } from "react-redux";

export default function RestauranteExcluirEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.restauranteEncontrado} >Restaurante encontrado! Clique no botão na lateral direita da tela para exclui-lo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do restaurante</label>
            <input id={styles.entradaPequenaPersonalizada} type="text" value={"Mc Donalds"} readOnly/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
          <button id={padroes.botaoRestauranteExcluir} onClick={() => dispatch(alteraEstado("restauranteExcluidoComSucesso"))}>Excluir Restaurante</button>
        </div>
      </div>
    </div>
  )
}
