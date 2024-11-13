import React from 'react'

import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuReceitas() {
  const dispatch = useDispatch();
  
  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalReceita} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarReceita"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar Receita
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarReceita"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar Receita
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirReceita"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Receita
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Receitas Cadastradas</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Arthur</div>
          <div className={styles.cadastrados}>Gessiel</div>
          <div className={styles.cadastrados}>Vinicius</div>
          <div className={styles.cadastrados}>Joao</div>
        </div>
    </div> 
  )
}
