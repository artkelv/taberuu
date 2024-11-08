import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuCategorias() {
  const dispatch = useDispatch();

  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalCategoria} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarCategoria"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar categoria
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarCategoria"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar categoria
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirCategoria"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Categoria
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Categorias Cadastradas</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Agente</div>
          <div className={styles.cadastrados}>Presidente</div>
          <div className={styles.cadastrados}>Acessor</div>
          <div className={styles.cadastrados}>Dono</div>
        </div>
    </div>
  )
}
