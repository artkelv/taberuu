import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaEditarEncontrada.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaEditarEncontrada() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
          <div>
            <p id={padroes.indicacao}>Voce está EDITANDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.categoriaEncontrada}>Categoria encontrada! Edite-a usando os campos abaixo.</p>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da Categoria</label>
              <input className={padroes.entradaPequena} type="text" placeholder="Digite o nome da categoria"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da Categoria</label>
              <input className={padroes.entradaMedia} type="text" placeholder="Digite o nome da categoria"/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
            <button id={padroes.botaoCategoria} onClick={() => dispatch(alteraEstado("categoriaEditadaComSucesso"))}>Aplicar mudanças</button>
          </div>
      </div>
    </div>
  )
}
