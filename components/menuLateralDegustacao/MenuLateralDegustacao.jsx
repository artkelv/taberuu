import imgDegustar from "@/public/img/degustar_branco.png";
import imagemPerfil from "@/public/img/image.png";
import imgSair from "@/public/img/sair.png";
import imgHome from "@/public/img/home.png";

import styles from "./menuLateralDegustacao.module.css";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MenuLateralDegustacao() {
    const dispatch = useDispatch();

    function renderizaTelaDeConteudo(parametro){
      if(parametro === "menuHome"){
        dispatch(alteraEstado("menuHome"))
      }else if(parametro === "menuDegustacao"){
        dispatch(alteraEstado("menuDegustacao"))
      }
    }
    
  return (
    <header id={styles.headerMain}>
      <div>
        <h1 id={styles.tituloEmpresa}>
          <strong id={styles.nometaberu}>Taberu</strong> FOOD
        </h1>
        <div id={styles.boxPrincipal}>
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo(dispatch(alteraEstado("menuHome")))}>
            <div>
              <Image alt="Icon" className={styles.icons} src={imgHome}/>
            </div>
            <div>
              <h5 className={styles.titulo}>Home</h5>
            </div>
          </div>
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo(dispatch(alteraEstado("menuDegustacao")))}>
            <div>
              <Image alt="Icon"  className={styles.icons} src={imgDegustar}/>
            </div>
            <div>
              <h5 className={styles.titulo}>Degustar</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id={styles.LinhaBranca}></div>
        <div id={styles.informacoes}>
          <Image
            src={imagemPerfil}
            width={50}
            height={50}
            alt="imagem de pefil"
          />
          <div>
            <h4 id={styles.nomeInfomacao}>Gessiel</h4>
            <p id={styles.emialInformacao}>Gessiel.sp@gmail.com</p>
          </div>
        </div>
        <button id={styles.bntSair}>
          <Image className={styles.imgIcons} src={imgSair} alt="imagem home" />
          Sair
        </button>
      </div>
    </header>
  )
}
