import Image from "next/image";

import imgHome from "@/public/img/home.png";
import imagemPerfil from "@/public/img/image.png";
import imgCargos from "@/public/img/cargos.png";
import imgCategoria from "@/public/img/categoria.png";
import imgfuncionarios from "@/public/img/funcionarios.png";
import imaIngrediantes from "@/public/img/ingredientes.png";
import imgMeidads from "@/public/img/medidas.png";
import imgReceitas from "@/public/img/receitas.png";
import imgRestaurante from "@/public/img/restaurante.png";
import imgSair from "@/public/img/sair.png";

import styles from "./styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

export default function MenuLateral() {

  const dispatch = useDispatch();

  function renderizaTelaDeConteudo(parametro){
    if(parametro === "menuHome"){
      dispatch(alteraEstado("menuHome"))
    }else if(parametro === "menuCargos"){
      dispatch(alteraEstado("menuCargos"))
    }else if(parametro === "menuFuncionarios"){
      dispatch(alteraEstado("menuFuncionarios"))
    }else if(parametro === "menuReceitas"){
      dispatch(alteraEstado("menuReceitas"))
    }else if(parametro === "menuIngredientes"){
      dispatch(alteraEstado("menuIngredientes"))
    }else if(parametro === "menuRestaurantes"){
      dispatch(alteraEstado("menuRestaurantes"))
    }else if(parametro === "menuMedidas"){
      dispatch(alteraEstado("menuMedidas"))
    }else if(parametro === "menuCategorias"){
      dispatch(alteraEstado("menuCategorias"))
    }
  }

  return (
    <header id={styles.headerMain}>
      <h1 id={styles.tituloEmpresa}>
        <strong id={styles.nometaberu}>Taberu</strong> FOOD
      </h1>
      <ul>
        <div id={styles.homeListMain} onClick={() => renderizaTelaDeConteudo("menuHome")}>
          <li id={styles.homeList}>
            <Image
              className={styles.imgIcons}
              src={imgHome}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Home</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuCargos")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgCargos}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Cargos</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuFuncionarios")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgfuncionarios}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Funcionarios</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuReceitas")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgReceitas}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Receitas</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuIngredientes")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imaIngrediantes}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Ingredientes</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuRestaurantes")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgRestaurante}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Restaurantes</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuMedidas")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgMeidads}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Medidas</h5>
          </li>
        </div>
        <div className={styles.subListMain} onClick={() => renderizaTelaDeConteudo("menuCategorias")}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgCategoria}
              alt="imagem home"
            />
            <h5 className={styles.titulo}>Categorias</h5>
          </li>
        </div>
      </ul>
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
    </header>
  );
}
