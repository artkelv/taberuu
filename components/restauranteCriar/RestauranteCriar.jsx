import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./restauranteCriar.module.css";
import padroes from "@/styles/padroesRestaurantes.module.css"

import { useDispatch } from "react-redux";

export default function RestauranteCriar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroContainer}>
        <div>
          <p id={padroes.indicacao}>Voce está CRIANDO um restaurante </p>
        </div>
        <div id={padroes.conteudo}>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome do restaurante* </label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Endereço*</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o RG"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Tipo de Restaurante*</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Data que entrou na empresa"/>
            </div>
          </div>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">CNPJ da empresa</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Quanto de salario receberá"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Categoria *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o cargo"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Cidade *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Nome fantasia da empresa"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaRestaurante"))}>Voltar</button>
          <button id={padroes.botaoRestaurante} onClick={() => dispatch(alteraEstado("restauranteCriadoComSucesso"))}>Criar Restaurante</button>
        </div>
      </div>
    </div>
  )
}
