import React from 'react'

import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";
import imageImprimir from "@/public/img/imprimir.png"

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
        <div id={styles.caixaPersonalizadaReceitas} onClick={() => alert("Aguarde a impressao de todas as receitas...")}>
          <h4 id={styles.titulo}>Receitas Cadastradas</h4>
          <div id={styles.caixaImprimiReceitas}>
            <p>Imprimir todas as receitas</p>
            <Image className={styles.imageImprimir} src={imageImprimir}/>
          </div>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.teste} onClick={() => alert("Aguarde a impressao!")}>
            <div>
              <p>Bolo de chocolate</p>
            </div>
            <div className={styles.caixaImprimirReceitas}>
              <Image className={styles.imageImprimir} src={imageImprimir}/>
              <p>Imprimir receita</p>
            </div>
          </div>
          <div className={styles.teste} onClick={() => alert("Aguarde a impressao!")}>
            <div>
              <p>Cuscuz</p>
            </div>
            <div className={styles.caixaImprimirReceitas}>
              <Image className={styles.imageImprimir} src={imageImprimir}/>
              <p>Imprimir receita</p>
            </div>
          </div>
          <div className={styles.teste} onClick={() => alert("Aguarde a impressao!")}>
            <div>
              <p>Churrasco</p>
            </div>
            <div className={styles.caixaImprimirReceitas}>
              <Image className={styles.imageImprimir} src={imageImprimir}/>
              <p>Imprimir receita</p>
            </div>
          </div>
          <div className={styles.teste} onClick={() => alert("Aguarde a impressao!")}>
            <div>
              <p>Macarronada</p>
            </div>
            <div className={styles.caixaImprimirReceitas}>
              <Image className={styles.imageImprimir} src={imageImprimir}/>
              <p>Imprimir receita</p>
            </div>
          </div>
          <div className={styles.teste} onClick={() => alert("Aguarde a impressao!")}>
            <div>
              <p>Bolo de fubá</p>
            </div>
            <div className={styles.caixaImprimirReceitas}>
              <Image className={styles.imageImprimir} src={imageImprimir}/>
              <p>Imprimir receita</p>
            </div>
          </div>
        </div>
    </div> 
  )
}
