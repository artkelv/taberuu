import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import padroes from "@/styles/padroesRestaurantes.module.css";
import styles from "./restauranteEditarEncontrado.module.css";

import { useDispatch } from "react-redux";

export default function RestauranteEditarEncontrado() {
  const dispatch = useDispatch();
  
  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está EDITANDO um restaurante</p>
        </div>
        <div id={padroes.conteudo}>
          <div>
            <p id={styles.atencao}>Restaurante encontrado! Edite-o usando os campos abaixo.</p>
          </div>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome do restaurante* </label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome do restaurante"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Endereço*</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Endereço do restaurante"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Tipo de Restaurante*</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o tipo de empresa que se enquadra"/>
            </div>
          </div>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">CNPJ da empresa</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="CNPJ da empresa"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Categoria *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira a categoria da empresa"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Cidade *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Onde a empresa está situada"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
          <button id={padroes.botaoRestaurante} onClick={() => dispatch(alteraEstado("restauranteEditadoComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
