import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoEditadoComSucesso.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CargoEditadoComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.containerSucesso}>
      <div id={styles.subContainer}>
        <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
          <p>Voce está EDITANDO um cargo!</p>
        </div>
        <div>
          <div id={padroes.balaoCriadoComSucesso}>
            <p>Cargo editado com sucesso!</p>
          </div>
        </div>
        <div id={styles.caixaBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
