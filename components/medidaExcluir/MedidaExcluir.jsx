import padroes from "@/styles/padroesMedidas.module.css";
import styles from "./medidaExcluir.module.css";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import { useDispatch } from "react-redux";

export default function MedidaExcluir() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO uma medida</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}>ATENÇÃO: Para excluirmos uma MEDIDA, primeiro precisamos localiza-la! Comece procurando pelo nome da Medida abaixo.</p>
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
          <button id={padroes.botaoMedidaExcluir} onClick={() => dispatch(alteraEstado("medidaExcluirNaoEncontrada"))}>Buscar Medida</button>
        </div>
      </div>
    </div>
  )
}
