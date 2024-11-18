import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaEditar.module.css"

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaEditar() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacao}>Voce está EDITANDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.atencao}>ATENÇÃO: Para editarmos uma CATEGORIA, primeiro precisamos localiza-la! Comece procurando pelo nome do categoria abaixo.</p>
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
            <button id={padroes.botaoCategoria} onClick={() => dispatch(alteraEstado("categoriaEditarNaoEncontrada"))}>Buscar categoria</button>
          </div>
      </div>
    </div>
  )
}
