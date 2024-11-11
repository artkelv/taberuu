"use client"; 

import styles from "@/styles/home.module.css";

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import MenuLateral from "@/components/menuLateral/menuLateral";
import MenuPrincipal from "@/components/menuPrincipal/MenuPrincipal";
import MenuCargo from "@/components/menuCargos/MenuCargos";
import MenuFuncionarios from "@/components/menuFuncionarios/MenuFuncionarios";
import MenuReceitas from "@/components/menuReceitas/MenuReceitas";
import MenuIngredientes from "@/components/menuIngredientes/MenuIngredientes";
import MenuRestaurantes from "@/components/menuRestaurantes/MenuRestaurantes";
import MenuMedidas from "@/components/menuMedidas/MenuMedidas";
import MenuCategorias from "@/components/menuCategorias/MenuCategorias";

import CargoCriar from "@/components/cargoCriar/CargoCriar";
import CargoEditar from "@/components/cargoEditar/CargoEditar";
import CargoExcluir from "@/components/cargoExcluir/CargoExcluir";
import CargoCriadoComSucesso from "@/components/cargoCriadoComSucesso/CargoCriadoComSucesso";
import CargoEditarEncontrado from "@/components/cargoEditarEncontrado/CargoEditarEncontrado";
import CargoEditarNaoEncontrado from "@/components/cargoEditarNaoEncontrado/CargoEditarNaoEncontrado";
import CargoEditadoComSucesso from "@/components/cargoEditadoComSucesso/CargoEditadoComSucesso";
import CargoExcluirNaoEncontrado from "@/components/cargoExcluirNaoEncontrado/CargoExcluirNaoEncontrado";
import CargoExcluirEncontrado from "@/components/cargoExcluirEncontrado/CargoExcluirEncontrado";
import CargoExcluidoComSucesso from "@/components/cargoExcluidoComSucesso/CargoExcluidoComSucesso";

function Home(){
    const [tela, setTela] = useState();

    const stateEstadoPrincipal = useSelector(state => state.estadoPrincipal.value);

    function renderizaTelaEscolhida(){
       if(stateEstadoPrincipal === "menuHome"){
        setTela(<MenuPrincipal/>)
       }else if(stateEstadoPrincipal === "menuCargos"){
        setTela(<MenuCargo/>)
       }else if(stateEstadoPrincipal === "menuFuncionarios"){
        setTela(<MenuFuncionarios/>)
       }else if(stateEstadoPrincipal === "menuReceitas"){
        setTela(<MenuReceitas/>)
       }else if(stateEstadoPrincipal === "menuIngredientes"){
        setTela(<MenuIngredientes/>)
       }else if(stateEstadoPrincipal === "menuRestaurantes"){
        setTela(<MenuRestaurantes/>)
       }else if(stateEstadoPrincipal === "menuMedidas"){
        setTela(<MenuMedidas/>)
       }else if(stateEstadoPrincipal === "menuCategorias"){
        setTela(<MenuCategorias/>)
        //--------------- AQUI ACABA O IF DO MENU LATERAL CARGO ---------------
       }else if(stateEstadoPrincipal === "criarCargo"){
        setTela(<CargoCriar/>)
       }else if(stateEstadoPrincipal === "editarCargo"){
        setTela(<CargoEditar/>)
       }else if(stateEstadoPrincipal === "excluirCargo"){
        setTela(<CargoExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaCargo"){
        setTela(<MenuCargo/>)
        //--------------- AQUI ACABA O IF DO MENU PRINCIPAL ---------------
       }else if(stateEstadoPrincipal === "cargoCriadoComSucesso"){
        setTela(<CargoCriadoComSucesso/>)
       }else if(stateEstadoPrincipal === "cargoEditarEncontrado"){
        setTela(<CargoEditarEncontrado/>)
       }else if(stateEstadoPrincipal === "cargoEditarNaoEncontrado"){
        setTela(<CargoEditarNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "cargoEditadoComSucesso"){
        setTela(<CargoEditadoComSucesso/>)
       }else if(stateEstadoPrincipal === "cargoExcluirNaoEncontrado"){
        setTela(<CargoExcluirNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "cargoExcluirEncontrado"){
        setTela(<CargoExcluirEncontrado/>)
       }else if(stateEstadoPrincipal === "cargoExcluidoComSucesso"){
        setTela(<CargoExcluidoComSucesso/>)
        //--------------- AQUI ACABA O IF DO CARGO ---------------
       }else if(stateEstadoPrincipal === "voltar"){
        setTela(<MenuPrincipal/>)
       }else{
        setTela(<MenuPrincipal/>)
       }
    }
    /* O PROBLEMA ESTA QUANDO SE CLICA NO MENU LATERAL E DEPOIS SE CLICA EM OUTRO LUGAR, SEMPRE IRÁ CAIR NO IF, PQ O VALOR DELE NAO ESTA MUDANDO, FAZENDO-O CAIR SEMPRE NOS PRIMEIROS IFS */
    useEffect(() => {
        renderizaTelaEscolhida()
    },[stateEstadoPrincipal])


    return (
        <div id={styles.container}>
            <MenuLateral />
            <div id={styles.conteudoPrincipal}>
                <div>
                    <h4 id={styles.textoTitulo}>Seja bem vindo,<strong id={styles.subtextoP}> ADMINISTRADOR MASTER!</strong></h4>
                </div>
                <div id={styles.linhaHorizontal}></div>
                {tela}
            </div>
        </div>
    );
};

export default Home;
