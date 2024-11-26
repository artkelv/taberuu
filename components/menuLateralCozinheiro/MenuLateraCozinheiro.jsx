import imgMetas from "@/public/img/img_metas.png";
import imagemPerfil from "@/public/img/image.png";
import imgSair from "@/public/img/sair.png";
import imgHome from "@/public/img/home.png";
import imaIngrediantes from "@/public/img/ingredientes.png";
import imgMedidas from "@/public/img/medidas.png";
import imgReceitas from "@/public/img/receitas.png";
import { useRouter } from "next/router";

import styles from "./menuLateralCozinheiro.module.css";

import Image from "next/image";

import { useDispatch } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MenuLateralCozinheiro() {
    const router = useRouter();
    const dispatch = useDispatch();

    function renderizaTelaDeConteudo(parametro){
        if(parametro === "menuHome"){
          dispatch(alteraEstado("menuHome"))
        }else if(parametro === "menuCozinheiro"){
          dispatch(alteraEstado("menuCozinheiro"))
        }else if(parametro === "menuReceitas"){
          dispatch(alteraEstado("menuReceitas"))
        }else if(parametro === "menuMedidas"){
          dispatch(alteraEstado("menuMedidas"))
        }else if(parametro === "menuIngredientes"){
          dispatch(alteraEstado("menuIngredientes"))
        }else if(parametro === "menuMetas"){
          dispatch(alteraEstado("menuMetas"))
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
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo("menuReceitas")}>
            <div>
              <Image className={styles.icons} src={imgReceitas} alt="imagem home" />
            </div>
            <div>
              <h5 className={styles.titulo}>Receitas</h5>
            </div>
          </div>
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo("menuMedidas")}>
            <div>
              <Image className={styles.icons} src={imgMedidas} alt="imagem home"/>
            </div>
            <div>
              <h5 className={styles.titulo}>Medidas</h5>
            </div>
          </div>
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo("menuIngredientes")}>
            <div>
              <Image className={styles.icons} src={imaIngrediantes} alt="imagem home" />
            </div>
            <div>
              <h5 className={styles.titulo}>Ingredientes</h5>
            </div>
          </div>
          <div className={styles.boxMenu} onClick={() => renderizaTelaDeConteudo(dispatch(alteraEstado("menuMetas")))}>
            <div>
              <Image alt="Icon"  className={styles.icons} src={imgMetas}/>
            </div>
            <div>
              <h5 className={styles.titulo}>Metas</h5>
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
            <p id={styles.emailInformacao}>Gessiel.sp@gmail.com</p>
          </div>
        </div>
        <button id={styles.btnSair} onClick={() => router.push('/')}>
          <Image className={styles.imgIcons} src={imgSair} alt="imagem home" />
          Sair
        </button>
      </div>
    </header>
  )
}
