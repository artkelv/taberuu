import styles from "./metaCriar.module.css";
import padroes from "@/styles/padroesMetas.module.css";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MetaCriar() {
    const dispatch = useDispatch();
    
  return (
    <div id={padroes.container}>
        <div>
            <div>
                <p id={padroes.indicacao}>Você está CRIANDO uma Meta</p>
            </div>
            <div id={padroes.conteudo}>
                <div id={styles.primeiroConteudo}>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Titulo</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira o titulo da meta"/>
                    </div>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Data de inicio</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira a data de Inicio"/>
                    </div>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Quantidade de tarefas</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira a quantidade de tarefas"/>
                    </div>
                </div>
                <div id={styles.segundoConteudo}>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Cargo associado</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Insira o cargo associado"/>
                    </div>
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Descrição</label>
                        <input className={padroes.entradaMedia} type="text" placeholder="Insira a descrição da Meta"/>
                    </div>
                </div>
            </div>
        </div>
        <div id={padroes.segundoContainer}>
            <div id={padroes.caixaDosBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaMeta"))}>Voltar</button>
                <button id={padroes.botaoMetas} onClick={() => dispatch(alteraEstado("metaCriadaComSucesso"))}>Criar Meta</button>
            </div>
        </div>
    </div>
  )
}
