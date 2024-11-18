import padroes from "@/styles/padroesMedidas.module.css";
import styles from "./medidaCriadaComSucesso.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux";

export default function MedidaCriadaComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está CRIANDO uma medida</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.balao}>Medida criada com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
