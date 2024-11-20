import React from 'react';

import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import padroes from "@/styles/padroes.module.css";
import styles from "./cargoExcluidoComSucesso.module.css";

export default function CargoExcluidoComSucesso() {
  const dispatch = useDispatch();
  return (
    <div id={padroes.container}>
        <div>
          <div id={padroes.indicacaoExcluir} className={padroes.indicacaoExcluir}>
            <p>Voce está EXCLUINDO um cargo!</p>
          </div>
          <div id={styles.balaoExcluidoComSucesso}>
            <p>Cargo Excluido com sucesso!</p>
          </div>
        </div>
        <div id={padroes.segundoContainer}>
          <div id={padroes.caixaDeBotoes}>
            <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaCargo"))}>Voltar</button>
          </div>
        </div>
    </div>
  )
}
