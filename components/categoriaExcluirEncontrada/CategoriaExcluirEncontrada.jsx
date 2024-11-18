import padroes from "@/styles/padroesCategorias.module.css";
import styles from "./categoriaExcluirEncontrada.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaExcluirEncontrada() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacaoExcluir}>Voce está EXCLUINDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div>
              <p id={styles.categoriaEncontrada}>Categoria encontrada! Exclua-a usando o botao na lateral direita.</p>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome da Categoria</label>
              <input id={styles.entradaPequenaPersonalizada} type="text" placeholder="Digite o nome da categoria" value={"Gereente"} readOnly/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMedida"))}>Voltar</button>
            <button id={padroes.botaoCategoriaExcluir} onClick={() => dispatch(alteraEstado("categoriaExcluidaComSucesso"))}>Excluir categoria</button>
          </div>
      </div>
    </div>
  )
}
