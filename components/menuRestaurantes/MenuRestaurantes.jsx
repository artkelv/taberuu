import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuRestaurantes() {
  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalRestaurante} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarRestaurante"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar Restaurante
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarRestaurante"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar Restaurante
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirRestaurante"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Restaurante
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Restaurantes Cadastradas</h4>
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
