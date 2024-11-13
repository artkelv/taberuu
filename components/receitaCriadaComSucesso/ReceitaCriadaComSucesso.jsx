import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./receitaCriadaComSucesso.module.css";
import padroes from "@/styles/padroesReceitas.module.css";

import { useDispatch } from "react-redux";

export default function ReceitaCriadaComSucesso() {
  const dispatch = useDispatch();

  return (
    <div id={styles.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está CRIANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.balao}>
            <p>Receita CRIADA com sucesso!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaReceita"))}>Voltar</button>
        </div>
      </div>
    </div>
  )
}
