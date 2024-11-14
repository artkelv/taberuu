import { alteraEstado } from '@/pages/redux/estadoPrincipal/estadoPrincipalSlice';
import { useDispatch } from 'react-redux';

import styles from "@/styles/menu.module.css";

import imgCriar from "@/public/img/criar.png";
import imgEditar from "@/public/img/editar.png";
import imgExcluir from "@/public/img/excluir.png";

import Image from 'next/image';

export default function MenuIngredientes() {
  const dispatch = useDispatch();

  return (
    <div id={styles.conteudo}>
        <div id={styles.conteudoDeEscolhas}>
          <div id={styles.caixaDeEscolhas}>
            <div id={styles.escolhaPrincipalIngrediente} className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("criarIngrediente"))}>
              <Image alt='Icone' src={imgCriar} className={styles.imgIcone}/>
              Criar Ingrediente
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("editarIngrediente"))}>
              <Image alt='Icone' src={imgEditar} className={styles.imgIcone}/>
              Editar Ingrediente
            </div>
            <div className={styles.escolhasSecundarias} onClick={() => dispatch(alteraEstado("excluirIngrediente"))}>
              <Image alt='Icone' src={imgExcluir} className={styles.imgIcone}/>
              Excluir Ingrediente
            </div>
          </div>    
        </div>
        <div>
          <h4 id={styles.titulo}>Ingredientes Cadastradas</h4>
        </div>
        <div id={styles.linhaBranca}></div>
        <div id={styles.itensCadastrados}>
          <div className={styles.cadastrados}>Povilho</div>
          <div className={styles.cadastrados}>Massa branca</div>
          <div className={styles.cadastrados}>Ovos</div>
          <div className={styles.cadastrados}>Azeite</div>
        </div>
    </div>
  )
}
