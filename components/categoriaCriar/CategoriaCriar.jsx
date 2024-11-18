import padroes from "@/styles/padroesCategorias.module.css";

import { useDispatch } from "react-redux";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function CategoriaCriar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
          <div>
              <p id={padroes.indicacao}>Voce está CRIANDO uma categoria</p>
          </div>
          <div id={padroes.conteudo}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Digite o nome  da Categoria</label>
              <input className={padroes.entradaPequena} type="text" placeholder="Insira o nome da categoria"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Descrição</label>
              <input className={padroes.entradaMedia} type="text" placeholder="Descreva a categoria"/>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDosBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCategoria"))}>Voltar</button>
            <button id={padroes.botaoCategoria} onClick={() => dispatch(alteraEstado("categoriaCriadaComSucesso"))}>Criar Medida</button>
          </div>
      </div>
    </div>
  )
}
