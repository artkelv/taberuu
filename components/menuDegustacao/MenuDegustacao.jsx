import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import Image from "next/image";

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

export default function MenuDegustacao() {
  const dispatch = useDispatch();

  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalDegustacao} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarDegustacao"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar degustação
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarDegustacao"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar degustação
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirDegustacao"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir degustação
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Degustação Cadastradas</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Degustaçao - Bolo de aveia</div>
          <div className={styles.cadastrados}>Degustaçao - Pamonha</div>
          <div className={styles.cadastrados}>Degustação - Casadinho</div>
          <div className={styles.cadastrados}>Degustação - Pão de ló</div>
        </div>
    </div>
  )
}
