

import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuCargos() {
  const dispatch = useDispatch();

  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalCargo} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarCargo"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar cargo
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarCargo"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar cargo
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirCargo"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Cargo
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Cargos Cadastrados</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Cozinheiro</div>
          <div className={styles.cadastrados}>Gerente</div>
          <div className={styles.cadastrados}>Garçon</div>
          <div className={styles.cadastrados}>Fiscal de loja</div>
        </div>
    </div>
  )
}
