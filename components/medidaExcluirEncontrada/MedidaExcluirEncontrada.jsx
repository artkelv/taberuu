import padroes from "@/styles/padroesMedidas.module.css";
import styles from "./medidaExcluirEncontrada.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux"

export default function MedidaExcluirEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO uma medida</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.medidaEncontrada}>Medida Encontrada! Use o botao na lateral direita inferior para exclui-lo</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome da medida</label>
            <input id={styles.entradaPequenaPersonalizada} type="text" value={"Gramas - g"} readOnly/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
          <button id={padroes.botaoMedidaExcluir} onClick={() => dispatch(alteraEstado("medidaExcluidaComSucesso"))}>Excluir Medida</button>
        </div>
      </div>
    </div>
  )
}
