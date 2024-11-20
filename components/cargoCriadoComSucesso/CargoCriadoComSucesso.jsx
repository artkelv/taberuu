import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoCriadoComSucesso.module.css";

export default function CargoCriadoComSucesso() {

  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
          <p>Voce está CRIANDO uma vaga!</p>
        </div>
        <div id={padroes.contaudo}>
          <div id={padroes.balaoCriadoComSucesso}>
            <p>Cargo criado com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={styles.caixaBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
