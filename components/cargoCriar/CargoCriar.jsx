import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import styles from "./cargoCriar.module.css";
import padroes from "@/styles/padroes.module.css";

export default function CargoCriar() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div>
          <p id={padroes.indicacao}>Voce está CRIANDO uma Cargo!</p>
        </div>
        <div id={padroes.conteudo}>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
            <input className={padroes.entradaPequena} type="text" name="" id="" placeholder="Nome do cargo"/>
          </div>
          <div className={padroes.caixaDasEntradas}>
            <label className={padroes.titulo} htmlFor="">Descrição do cargo</label>
            <input className={padroes.entradaMedia} type="text" name="" id="" placeholder="Descreva aqui a função do cargo que está sendo criado"/>
          </div>
          <div>
            <h5 id={styles.idDoCargo}>ID do cargo</h5>
            <p id={styles.descricaoDoId}>O ID do cargo será gerado automaticamente!</p>
          </div>
        </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
          <button id={padroes.botaoCargo} onClick={() => dispatch(alteraEstado("cargoCriadoComSucesso"))}>Criar Medida</button>
        </div>
      </div>
    </div>
  )
}
