import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuMedidas() {
  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalMedida} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarFuncionario"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar Medida
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarMedida"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar Medida
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirMedida"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Medida
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Medidas Cadastradas</h4>
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
