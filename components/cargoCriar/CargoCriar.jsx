import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import styles from "./cargoCriar.module.css";
import padroes from "@/styles/padroes.module.css";

export default function CargoCriar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
        <p>Voce está CRIANDO uma Cargo!</p>
      </div>
      <div id={padroes.subContainer}>
        <form>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
            <input className={padroes.entradaPequena} type="text" name="" id="" placeholder="Nome do cargo"/>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Descrição do cargo</label>
            <input className={padroes.entradaMedia} type="text" name="" id="" placeholder="Descreva aqui a função do cargo que está sendo criado"/>
          </div>
          <div>
            <h2 id={styles.idDoCargo}>ID do cargo</h2>
            <p id={styles.descricaoDoId}>O ID do cargo será gerado automaticamente!</p>
          </div>
        </form>
      </div>
      <div id={padroes.caixaDeBotoes}>
        <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>voltar</button>
        <button id={padroes.botao} className={padroes.botaoCargo} onClick={() => dispatch(alteraEstado("cargoCriadoComSucesso"))}>criar cargo</button>
      </div>
    </div>
  )
}
