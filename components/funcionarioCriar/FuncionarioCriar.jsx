import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioCriar.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioCriar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroConteudo}>
        <div id={padroes.indicacao}>
          <p>Voce está CRIANDO um funcionário</p>
        </div>
        <div id={padroes.conteudo}>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o nome"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">RG</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o RG"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Data de Admissão *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Data que entrou na empresa"/>
            </div>
          </div>
          <div className={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Salario *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Quanto de salario receberá"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Cargo *</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o cargo"/>
            </div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Nome Fantasia (opcional)</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Nome fantasia da empresa"/>
            </div>
          </div>
          <div id={padroes.caixaForm}>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">Restaurante</label>
              <input className={padroes.entradaGrande} type="text" Placeholder="Qual restaurante ele trabalha"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoConteudo}>
        <div id={padroes.caixaDeBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaFuncionario"))}>Voltar</button>
          <button id={padroes.botaoFuncionario} onClick={() => dispatch(alteraEstado("funcionarioCriadoComSucesso"))}>Criar Funcionario</button>
        </div>
      </div>
    </div>
  )
}
