import padroes from "@/styles/padroesMedidas.module.css";
import styles from "./medidaEditarEncontrada.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux";

export default function MedidaEditarEncontrada() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está EDITANDO uma medida</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.medidaEncontrada}>Medida encontrada! Edite-a usando os campos abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome da medida</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Digite o nome da medida"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
          <button id={padroes.botaoMedida} onClick={() => dispatch(alteraEstado("medidaEditadaComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
