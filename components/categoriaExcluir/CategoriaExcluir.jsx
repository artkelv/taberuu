import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaExcluir.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaExcluir() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.atencao}>ATENÇÃO: Para excluirmos uma CATEGORIA, primeiro precisamos localiza-la! Comece procurando pelo nome do categoria abaixo.</p>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da Categoria</label>
              <input className={padroes.entradaPequena} type="text" placeholder="Digite o nome da categoria"/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
            <button id={padroes.botaoCategoriaExcluir} onClick={() => dispatch(alteraEstado("categoriaExcluirNaoEncontrada"))}>Buscar categoria</button>
          </div>
      </div>
    </div>
  )
}
