import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoEditarEncontrado.module.css";

export default function CargoEditarEncontrado() {

  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
          <p>Voce está EDITANDO um cargo!</p>
        </div>
        <div id={styles.conteudoPersonalizado}>
            <div id={styles.cargoEncontrado}>
              <p>Cargo encontrado! Edite-o usando os campos abaixo.</p>
            </div>
            <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo}>Nome do cargo</label>
                <input className={padroes.entradaPequena} type="text"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo}>Descrição do cargo</label>
                <input className={padroes.entradaMedia} type="text"/>
            </div>
            <div>
              <h5>ID da vaga</h5>
              <p id={styles.idDaVaga}>O ID da vaga continuará o mesmo!</p>
            </div>
          </div>
      </div>
      <div id={styles.segundoContainerPersonalizado}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
          <button id={padroes.botaoCargo} onClick={() => dispatch(alteraEstado("cargoEditarNaoEncontrado"))}>Editar cargo</button>
        </div>
      </div>
    </div>
  )
}
