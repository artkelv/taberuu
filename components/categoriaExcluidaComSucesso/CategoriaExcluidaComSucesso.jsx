import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaExcluidaComSucesso.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaExcluidaComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.balao}>Categoria excluido com sucesso!</p>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCategoria"))}>Voltar</button>
          </div>
      </div>
    </div>
  )
}
