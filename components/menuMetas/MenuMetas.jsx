import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuMetas() {
    const dispatch = useDispatch();

  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalMetas} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarMeta"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar Meta
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarMeta"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar Meta
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirMeta"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Meta
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Metas Cadastradas</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Meta 1</div>
          <div className={styles.cadastrados}>Meta 2</div>
          <div className={styles.cadastrados}>Meta 3</div>
          <div className={styles.cadastrados}>Meta 4</div>
        </div>
    </div>
  )
}
