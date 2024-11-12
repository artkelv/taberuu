import Image from "next/image";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg";

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./funcionarioEditarNaoEncontrado.module.css";
import padroes from "@/styles/padroesFuncionarios.module.css";

import { useDispatch } from "react-redux";

export default function FuncionarioEditarNaoEncontrado() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está EDITANDO um funcionário</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.caixaNaoEncontrado}>
            <Image id={padroes.imagemNaoEncontrada} src={imgNaoEncontrado}/>
            <p id={styles.atencao}><strong id={padroes.strongNaoEncontrado}>Não encontrado!</strong> O funcionario que voce esta querendo editar não foi encontrado. Busque o funcionario novamente abaixo.</p>
          </div>
          <div id={styles.linha}></div>
          <div>
            <div className={padroes.caixaDasEntradas}>
              <label className={padroes.titulo} htmlFor="">RG do funcionario</label>
              <input className={padroes.entradaPequena} type="text" Placeholder="Insira o RG do Funcionario"/>
            </div>
          </div>
        </div>
      </div>
      <div id={padroes.segundoConteudo}>
        <div id={padroes.caixaDeBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaFuncionario"))}>Voltar</button>
          <button id={padroes.botaoFuncionario} onClick={() => dispatch(alteraEstado("funcionarioEditarEncontrado"))}>Buscar Funcionario</button>
        </div>
      </div>
    </div>
  )
}
