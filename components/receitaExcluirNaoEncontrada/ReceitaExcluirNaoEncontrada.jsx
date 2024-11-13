import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./receitaExcluirNaoEncontrada.module.css";
import padroes from "@/styles/padroesReceitas.module.css";

import imgNaoEncontrado from "@/public/img/nao_encontrado.jpg"

import { useDispatch } from "react-redux";

import Image from "next/image";

export default function ReceitaExcluirNaoEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={styles.container}>
      <div>
        <div id={padroes.indicacaoExcluir}>
          <p>Voce está EXCLUINDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={padroes.caixaNaoEncontrado}>
            <Image id={padroes.imgNotFound} src={imgNaoEncontrado}/>
            <p>ATENÇÃO: Receita nao encontrada! procure novamente usando os campos abaixo, insira o nome da receita abaixo.</p>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">ID da receita</label>
            <input className={padroes.entradaPequena} type="text" placeholder="Insira o ID da receita"/>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
        <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaReceita"))}>Voltar</button>
        <button id={padroes.botaoReceitaExcluir} onClick={() => dispatch(alteraEstado("receitaExcluirEncontrada"))}>Buscar receita</button>
        </div>
      </div>
    </div>
  )
}
