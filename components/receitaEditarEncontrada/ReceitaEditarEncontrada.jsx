import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";

import styles from "./receitaEditarEncontrada.module.css";
import padroes from "@/styles/padroesReceitas.module.css";

import Image from "next/image";

import imgComida1 from "@/public/img/foto_comida_1.png";
import imgComida2 from "@/public/img/foto_comida_2.png";
import imgComida3 from "@/public/img/foto_comida_3.jpeg";
import imgComida4 from "@/public/img/foto_comida_4.jpg";

import { useDispatch } from "react-redux";

export default function ReceitaEditarEncontrada() {
  const dispatch = useDispatch();

  return (
    <div id={padroes.container}>
      <div>
        <div id={padroes.indicacao}>
          <p>Voce está CRIANDO uma receita</p>
        </div>
        <div id={padroes.conteudo}>
          <div id={styles.receitaEncontrada}>
            <p>Receita encontrada! Edite-a usando os campos abaixo.</p>
          </div>
          <div className={padroes.primeiroConteudo}>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Nome da receita* </label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira o Nome da receita"/>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Criador *</label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira o criador da receita"/>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Tempo de preparo </label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira o tempo de preparo"/>
              </div>
            </div>
            <div className={padroes.primeiroConteudo}>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Data de criação</label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira a data de criação da receita"/>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Categoria *</label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira a categoria da receita"/>
              </div>
              <div className={padroes.caixaDasEntradas}>
                <label className={padroes.titulo} htmlFor="">Numero de porções *</label>
                <input className={padroes.entradaPequena} type="text" placeholder="Insira o numero de porções"/>
              </div>
            </div>
            <div>
              <div className={padroes.caixaDasEntradasGrandes}>
                <label className={padroes.titulo} htmlFor="">Descrição da Receita</label>
                <input className={padroes.entradaGrande} type="text" placeholder="Descreva a receita aqui"/>
              </div>
              <div className={padroes.caixaDasEntradasGrandes}>
                <label className={padroes.titulo} htmlFor="">Modo de preparo *</label>
                <input className={padroes.entradaGrande} type="text" placeholder="Como deve ser feito a receita"/>
              </div>
            </div>
            <div>
              <div className={padroes.caixaDasEntradasGrandes}>
                <label className={padroes.titulo} htmlFor="">Ingredientes</label>
                <input className={padroes.entradaGrande} type="text" placeholder="Insira aqui todos os ingredientes necessarios para se criar a receita. Exemplo: amido de milho, azeite, manteiga"/>
              </div>
            </div>
            <div id={padroes.anexarFotosDaReceita}>
              <div id={padroes.subConteudoFotosDaReceita}>
                <p id={padroes.tituloFotos}>Imagem da Receita</p>
                <div id={padroes.caixaFotos}>
                  <input id={padroes.entradaDeArquivo} type="file" name=""/>
                  <div id={padroes.cancelarEnvioArquivo}>Cancelar</div>
                </div>
              </div>
              <div id={padroes.caixaFotosReceitas}>
                <Image src={imgComida1} className={padroes.imgFotosReceita}/>
                <Image src={imgComida2} className={padroes.imgFotosReceita}/>
                <Image src={imgComida3} className={padroes.imgFotosReceita}/>
                <Image src={imgComida4} className={padroes.imgFotosReceita}/>
              </div>
            </div>
          </div>
      </div>
      <div id={padroes.segundoContainer}>
        <div id={padroes.caixaDosBotoes}>
          <button id={padroes.botaoVoltar} onClick={() => dispatch(alteraEstado("voltarParaReceita"))}>Voltar</button>
          <button id={padroes.botaoReceita} onClick={() => dispatch(alteraEstado("receitaEditadaComSucesso"))}>Aplicar mudanças</button>
        </div>
      </div>
    </div>
  )
}
