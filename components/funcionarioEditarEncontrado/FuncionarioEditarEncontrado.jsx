
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioEditarEncontrado.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioEditarEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.primeiroConteudo}>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO um funcionário</p>
        </div>
        <div id={styles.conteudoEspecificoFuncionario}>
          <div>
            <p id={styles.funcionarioEncontrado}>Funcionario encontrado! Edite-o usando os campos abaixo.</p>
          </div>
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
          <button id={padroes.botaoFuncionario} onClick={() => dispatch(alteraEstado("funcionarioEditadoComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
