import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoEditar.module.css";

import { useState } from "react";

export default function CargoEditar() {
  const dispatch = useDispatch();

  const [carros, setCarros] = useState([
    'Fusca', 
    'Civic', 
    'Ferrari', 
    'Camaro', 
    'Golf'
  ])

  function retornoDaPesquisa(){
    const filtroDeCarros = carros.filter((item) => item === "Camaro");
    if(filtroDeCarros.length !== 0){
        dispatch(alteraEstado("cargoEditarEncontrado"))
    }else{
        dispatch(alteraEstado("cargoEditarNaoEncontrado"))
    }
  }

  return (
    <div id={padroes.container}>
        <div id={padroes.indicacao} className={padroes.indicacaoCargo}>
            <p>Voce está EDITANDO um cargo!</p>
        </div> 
        <div id={styles.caixaLocalizarEbotoes}>
            <div id={padroes.subContainer}>
                <div id={styles.localizarCargo}>
                    <p>ATENÇÃO: Para editarmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
                </div>
                <form action="">
                    <div className={padroes.caixaDasEntradas}>
                        <label className={padroes.titulo} htmlFor="">Nome do cargo</label>
                        <input className={padroes.entradaPequena} type="text" placeholder="Infome o nome do cargo"/>
                    </div>
                </form>
            </div>
            <div id={padroes.caixaDeBotoes}>
                <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
                <button id={padroes.botao} className={padroes.botaoCargo} onClick={() => retornoDaPesquisa()}>Buscar cargo</button>
            </div>
        </div>
    </div>
  )
}
