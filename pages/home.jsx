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
import MenuDegustacao from "@/components/menuDegustacao/MenuDegustacao";
import MenuLateralDegustacao from "@/components/menuLateralDegustacao/MenuLateralDegustacao";

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

import FuncionarioCriadoComSucesso from "@/components/funcionarioCriadoComSucesso/FuncionarioCriadoComSucesso";
import FuncionarioEditarEncontrado from "@/components/funcionarioEditarEncontrado/FuncionarioEditarEncontrado";
import FuncionarioEditarNaoEncontrado from "@/components/funcionarioEditarNaoEncontrado/FuncionarioEditarNaoEncontrado";
import FuncionarioEditadoComSucesso from "@/components/funcionarioEditadoComSucesso/FuncionarioEditadoComSucesso";
import FuncionarioExcluirNaoEncontrado from "@/components/funcionarioExcluirNaoEncontrado/FuncionarioExcluirNaoEncontrado";
import FuncionarioExcluirEncontrado from "@/components/funcionarioExcluirEncontrado/FuncionarioExcluirEncontrado";
import FuncionarioExcluidoComSucesso from "@/components/funcionarioExcluidoComSucesso/FuncionarioExcluidoComSucesso";
import FuncionarioCriar from "@/components/funcionarioCriar/FuncionarioCriar";
import FuncionarioEditar from "@/components/funcionarioEditar/FuncionarioEditar";
import FuncionarioExcluir from "@/components/funcionarioExcluir/FuncionarioExcluir";

import ReceitaCriar from "@/components/receitaCriar/ReceitaCriar";
import ReceitaEditar from "@/components/receitaEditar/ReceitaEditar";
import ReceitaExcluir from "@/components/receitaExcluir/ReceitaExcluir";
import ReceitaCriadaComSucesso from "@/components/receitaCriadaComSucesso/ReceitaCriadaComSucesso";
import ReceitaEditarEncontrada from "@/components/receitaEditarEncontrada/ReceitaEditarEncontrada";
import ReceitaEditarNaoEncontrada from "@/components/receitaEditarNaoEncontrada/ReceitaEditarNaoEncontrada";
import ReceitaEditadaComSucesso from "@/components/receitaEditadaComSucesso/ReceitaEditadaComSucesso";
import ReceitaExcluirNaoEncontrada from "@/components/receitaExcluirNaoEncontrada/ReceitaExcluirNaoEncontrada";
import ReceitaExcluirEncontrada from "@/components/receitaExcluirEncontrada/ReceitaExcluirEncontrada";
import ReceitaExcluidaComSucesso from "@/components/receitaExcluidaComSucesso/ReceitaExcluidaComSucesso";

import IngredienteCriar from "@/components/ingredienteCriar/IngredienteCriar";
import IngredienteEditar from "@/components/ingredienteEditar/IngredienteEditar";
import IngredienteExcluir from "@/components/ingredienteExcluir/IngredienteExcluir";
import IngredienteCriadoComSucesso from "@/components/ingredienteCriadoComSucesso/IngredienteCriadoComSucesso";
import IngredienteEditarEncontrado from "@/components/ingredienteEditarEncontrado/IngredienteEditarEncontrado";
import IngredienteEditarNaoEncontrado from "@/components/ingredienteEditarNaoEncontrado/IngredienteEditarNaoEncontrado";
import IngredienteEditadoComSucesso from "@/components/ingredienteEditadoComSucesso/IngredienteEditadoComSucesso";
import IngredienteExcluirNaoEncontrado from "@/components/ingredienteExcluirNaoEncontrado/IngredienteExcluirNaoEncontrado";
import IngredienteExcluirEncontrado from "@/components/ingredienteExcluirEncontrado/IngredienteExcluirEncontrado";
import IngredienteExcluidoComSucesso from "@/components/ingredienteExcluidoComSucesso/IngredienteExcluidoComSucesso";

import RestauranteCriar from "@/components/restauranteCriar/RestauranteCriar";
import RestauranteEditar from "@/components/restauranteEditar/RestauranteEditar";
import RestauranteExcluir from "@/components/restauranteExcluir/RestauranteExcluir";
import RestauranteCriadoComSucesso from "@/components/restauranteCriadoComSucesso/RestauranteCriadoComSucesso";
import RestauranteEditarEncontrado from "@/components/restauranteEditarEncontrado/RestauranteEditarEncontrado";
import RestauranteEditarNaoEncontrado from "@/components/restauranteEditarNaoEncontrado/RestauranteEditarNaoEncontrado";
import RestauranteEditadoComSucesso from "@/components/restauranteEditadoComSucesso/RestauranteEditadoComSucesso";
import RestauranteExcluirNaoEncontrado from "@/components/restauranteExcluirNaoEncontrado/RestauranteExcluirNaoEncontrado";
import RestauranteExcluirEncontrado from "@/components/restauranteExcluirEncontrado/RestauranteExcluirEncontrado";
import RestauranteExcluidoComSucesso from "@/components/restauranteExcluidoComSucesso/RestauranteExcluidoComSucesso";

import MedidaCriar from "@/components/medidaCriar/MedidaCriar";
import MedidaEditar from "@/components/medidaEditar/MedidaEditar";
import MedidaExcluir from "@/components/medidaExcluir/MedidaExcluir";
import MedidaCriadaComSucesso from "@/components/medidaCriadaComSucesso/MedidaCriadaComSucesso";
import MedidaEditarEncontrada from "@/components/medidaEditarEncontrada/MedidaEditarEncontrada";
import MedidaEditarNaoEncontrada from "@/components/medidaEditarNaoEncontrada/MedidaEditarNaoEncontrada";
import MedidaEditadaComSucesso from "@/components/medidaEditadaComSucesso/MedidaEditadaComSucesso";
import MedidaExcluirNaoEncontrada from "@/components/medidaExcluirNaoEncontrada/MedidaExcluirNaoEncontrada";
import MedidaExcluirEncontrada from "@/components/medidaExcluirEncontrada/MedidaExcluirEncontrada";
import MedidaExcluidaComSucesso from "@/components/medidaExcluidaComSucesso/MedidaExcluidaComSucesso";

import CategoriaCriar from "@/components/categoriaCriar/CategoriaCriar";
import CategoriaEditar from "@/components/categoriaEditar/CategoriaEditar";
import CategoriaExcluir from "@/components/categoriaExcluir/CategoriaExcluir";
import CategoriaCriadaComSucesso from "@/components/categoriaCriadaComSucesso/CategoriaCriadaComSucesso";
import CategoriaEditarEncontrada from "@/components/categoriaEditarEncontrada/CategoriaEditarEncontrada";
import CategoriaEditarNaoEncontrada from "@/components/categoriaEditarNaoEncontrada/CategoriaEditarNaoEncontrada";
import CategoriaEditadaComSucesso from "@/components/categoriaEditadaComSucesso/CategoriaEditadaComSucesso";
import CategoriaExcluirNaoEncontrada from "@/components/categoriaExcluirNaoEncontrada/CategoriaExcluirNaoEncontrada";
import CategoriaExcluirEncontrada from "@/components/categoriaExcluirEncontrada/CategoriaExcluirEncontrada";
import CategoriaExcluidaComSucesso from "@/components/categoriaExcluidaComSucesso/CategoriaExcluidaComSucesso";

import Filtro from "@/components/filtro/Filtro";
import FiltroRelatorio from "@/components/filtroRelatorio/FiltroRelatorio";

import DegustarCriar from "@/components/degustarCriar/DegustarCriar";
import DegustarCriadoComSucesso from "@/components/degustarCriadoComSucesso/DegustarCriadoComSucesso";
import DegustarEditar from "@/components/degustarEditar/DegustarEditar";
import DegustarEditarNaoEncontrado from "@/components/degustarEditarNaoEncontrado/DegustarEditarNaoEncontrado";
import DegustarEditarEncontrado from "@/components/degustarEditarEncontrado/DegustarEditarEncontrado";
import DegustarEditadoComSucesso from "@/components/degustarEditadoComSucesso/DegustarEditadoComSucesso";
import DegustarExcluir from "@/components/degustarExcluir/DegustarExcluir";
import DegustarExcluirNaoEncontrado from "@/components/degustarExcluirNaoEncontrado/DegustarExcluirNaoEncontrado";
import DegustarExcluirEncontrado from "@/components/desgustarExcluirEncontrado/DegustarExcluirEncontrado";
import DegustarExcluidoComSucesso from "@/components/degustarExcluidoComSucesso/DegustarExcluidoComSucesso";


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
       }else if(stateEstadoPrincipal === "menuDegustacao"){
        setTela(<MenuDegustacao/>)
       }
       //--------------- AQUI ACABA O IF DO MENU LATERAL CARGO ---------------
       else if(stateEstadoPrincipal === "criarCargo"){
        setTela(<CargoCriar/>)
       }else if(stateEstadoPrincipal === "editarCargo"){
        setTela(<CargoEditar/>)
       }else if(stateEstadoPrincipal === "excluirCargo"){
        setTela(<CargoExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaCargo"){
        setTela(<MenuCargo/>)
        //--------------- AQUI ACABA O IF DO MENU CARGO ---------------
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
       }else if(stateEstadoPrincipal === "criarFuncionario"){
        setTela(<FuncionarioCriar/>)
       }else if(stateEstadoPrincipal === "editarFuncionario"){
       setTela(<FuncionarioEditar/>)
       }else if(stateEstadoPrincipal === "excluirFuncionario"){
       setTela(<FuncionarioExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaFuncionario"){
       setTela(<MenuFuncionarios/>)
       //--------------- AQUI ACABA O IF DO MENU FUNCIONARIO ---------------
       }else if(stateEstadoPrincipal === "funcionarioCriadoComSucesso"){
       setTela(<FuncionarioCriadoComSucesso/>)
       }else if(stateEstadoPrincipal === "funcionarioEditarEncontrado"){
       setTela(<FuncionarioEditarEncontrado/>)
       }else if(stateEstadoPrincipal === "funcionarioEditarNaoEncontrado"){
       setTela(<FuncionarioEditarNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "funcionarioEditadoComSucesso"){
       setTela(<FuncionarioEditadoComSucesso/>)
       }else if(stateEstadoPrincipal === "funcionarioExcluirNaoEncontrado"){
       setTela(<FuncionarioExcluirNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "funcionarioExcluirEncontrado"){
       setTela(<FuncionarioExcluirEncontrado/>)
       }else if(stateEstadoPrincipal === "funcionarioExcluidoComSucesso"){
       setTela(<FuncionarioExcluidoComSucesso/>)
       //--------------- AQUI ACABA O IF DO FUNCIONARIO ---------------
       }else if(stateEstadoPrincipal === "criarReceita"){
        setTela(<ReceitaCriar/>)
       }else if(stateEstadoPrincipal === "editarReceita"){
       setTela(<ReceitaEditar/>)
       }else if(stateEstadoPrincipal === "excluirReceita"){
       setTela(<ReceitaExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaReceita"){
       setTela(<MenuReceitas/>)
       //--------------- AQUI ACABA O IF DO MENU RECEITA ---------------
       }else if(stateEstadoPrincipal === "receitaCriadaComSucesso"){
       setTela(<ReceitaCriadaComSucesso/>)
       }else if(stateEstadoPrincipal === "receitaEditarEncontrada"){
       setTela(<ReceitaEditarEncontrada/>)
       }else if(stateEstadoPrincipal === "receitaEditarNaoEncontrada"){
       setTela(<ReceitaEditarNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "receitaEditadaComSucesso"){
       setTela(<ReceitaEditadaComSucesso/>)
       }else if(stateEstadoPrincipal === "receitaExcluirNaoEncontrada"){
       setTela(<ReceitaExcluirNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "receitaExcluirEncontrada"){
       setTela(<ReceitaExcluirEncontrada/>)
       }else if(stateEstadoPrincipal === "receitaExcluidaComSucesso"){
       setTela(<ReceitaExcluidaComSucesso/>)
       //--------------- AQUI ACABA O IF DO MENU RECEITA ---------------
       }else if(stateEstadoPrincipal === "criarIngrediente"){
        setTela(<IngredienteCriar/>)
       }else if(stateEstadoPrincipal === "editarIngrediente"){
       setTela(<IngredienteEditar/>)
       }else if(stateEstadoPrincipal === "excluirIngrediente"){
       setTela(<IngredienteExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaIngrediente"){
       setTela(<MenuIngredientes/>)
       //--------------- AQUI ACABA O IF DO MENU INGREDIENTE ---------------
       }else if(stateEstadoPrincipal === "ingredienteCriadoComSucesso"){
       setTela(<IngredienteCriadoComSucesso/>)
       }else if(stateEstadoPrincipal === "ingredienteEditarEncontrado"){
       setTela(<IngredienteEditarEncontrado/>)
       }else if(stateEstadoPrincipal === "ingredienteEditarNaoEncontrado"){
       setTela(<IngredienteEditarNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "ingredienteEditadoComSucesso"){
       setTela(<IngredienteEditadoComSucesso/>)
       }else if(stateEstadoPrincipal === "ingredienteExcluirNaoEncontrado"){
       setTela(<IngredienteExcluirNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "ingredienteExcluirEncontrado"){
       setTela(<IngredienteExcluirEncontrado/>)
       }else if(stateEstadoPrincipal === "ingredienteExcluidoComSucesso"){
       setTela(<IngredienteExcluidoComSucesso/>)
       //--------------- AQUI ACABA O IF DO MENU INGREDIENTE ---------------
       }else if(stateEstadoPrincipal === "criarRestaurante"){
        setTela(<RestauranteCriar/>)
       }else if(stateEstadoPrincipal === "editarRestaurante"){
       setTela(<RestauranteEditar/>)
       }else if(stateEstadoPrincipal === "excluirRestaurante"){
       setTela(<RestauranteExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaRestaurante"){
       setTela(<MenuRestaurantes/>)
       //--------------- AQUI ACABA O IF DO MENU RESTAURANTE ---------------
       }else if(stateEstadoPrincipal === "restauranteCriadoComSucesso"){
       setTela(<RestauranteCriadoComSucesso/>)
       }else if(stateEstadoPrincipal === "restauranteEditarEncontrado"){
       setTela(<RestauranteEditarEncontrado/>)
       }else if(stateEstadoPrincipal === "restauranteEditarNaoEncontrado"){
       setTela(<RestauranteEditarNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "restauranteEditadoComSucesso"){
       setTela(<RestauranteEditadoComSucesso/>)
       }else if(stateEstadoPrincipal === "restauranteExcluirNaoEncontrado"){
       setTela(<RestauranteExcluirNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "restauranteExcluirEncontrado"){
       setTela(<RestauranteExcluirEncontrado/>)
       }else if(stateEstadoPrincipal === "restauranteExcluidoComSucesso"){
       setTela(<RestauranteExcluidoComSucesso/>)
       //--------------- AQUI ACABA O IF DO MENU RESTAURANTE ---------------
       }else if(stateEstadoPrincipal === "criarMedida"){
        setTela(<MedidaCriar/>)
       }else if(stateEstadoPrincipal === "editarMedida"){
       setTela(<MedidaEditar/>)
       }else if(stateEstadoPrincipal === "excluirMedida"){
       setTela(<MedidaExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaMedida"){
       setTela(<MenuMedidas/>)
       //--------------- AQUI ACABA O IF DO MENU MEDIDA ---------------
       }else if(stateEstadoPrincipal === "medidaCriadaComSucesso"){
       setTela(<MedidaCriadaComSucesso/>)
       }else if(stateEstadoPrincipal === "medidaEditarEncontrada"){
       setTela(<MedidaEditarEncontrada/>)
       }else if(stateEstadoPrincipal === "medidaEditarNaoEncontrada"){
       setTela(<MedidaEditarNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "medidaEditadaComSucesso"){
       setTela(<MedidaEditadaComSucesso/>)
       }else if(stateEstadoPrincipal === "medidaExcluirNaoEncontrada"){
       setTela(<MedidaExcluirNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "medidaExcluirEncontrada"){
       setTela(<MedidaExcluirEncontrada/>)
       }else if(stateEstadoPrincipal === "medidaExcluidaComSucesso"){
       setTela(<MedidaExcluidaComSucesso/>)
       //--------------- AQUI ACABA O IF DO MENU MEDIDA ---------------
       }else if(stateEstadoPrincipal === "criarCategoria"){
        setTela(<CategoriaCriar/>)
       }else if(stateEstadoPrincipal === "editarCategoria"){
           setTela(<CategoriaEditar/>)
       }else if(stateEstadoPrincipal === "excluirCategoria"){
           setTela(<CategoriaExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaCategoria"){
           setTela(<MenuCategorias/>)
           //--------------- AQUI ACABA O IF DO MENU CATEGORIA ---------------
       }else if(stateEstadoPrincipal === "categoriaCriadaComSucesso"){
           setTela(<CategoriaCriadaComSucesso/>)
       }else if(stateEstadoPrincipal === "categoriaEditarEncontrada"){
           setTela(<CategoriaEditarEncontrada/>)
       }else if(stateEstadoPrincipal === "categoriaEditarNaoEncontrada"){
           setTela(<CategoriaEditarNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "categoriaEditadaComSucesso"){
           setTela(<CategoriaEditadaComSucesso/>)
       }else if(stateEstadoPrincipal === "categoriaExcluirNaoEncontrada"){
           setTela(<CategoriaExcluirNaoEncontrada/>)
       }else if(stateEstadoPrincipal === "categoriaExcluirEncontrada"){
           setTela(<CategoriaExcluirEncontrada/>)
       }else if(stateEstadoPrincipal === "categoriaExcluidaComSucesso"){
           setTela(<CategoriaExcluidaComSucesso/>)
           //--------------- AQUI ACABA O IF DO MENU CATEGORIA ---------------
       }else if(stateEstadoPrincipal === "criarDegustacao"){
           setTela(<DegustarCriar/>)
       }else if(stateEstadoPrincipal === "editarDegustacao"){
           setTela(<DegustarEditar/>)
       }else if(stateEstadoPrincipal === "excluirDegustacao"){
           setTela(<DegustarExcluir/>)
       }else if(stateEstadoPrincipal === "voltarParaDegustacao"){
           setTela(<MenuDegustacao/>)
           //--------------- AQUI ACABA O IF DO MENU DEGUSTAR ---------------
       }else if(stateEstadoPrincipal === "degustarCriadaComSucesso"){
           setTela(<DegustarCriadoComSucesso/>)
       }else if(stateEstadoPrincipal === "degustarEditarEncontrada"){
           setTela(<DegustarEditarEncontrado/>)
       }else if(stateEstadoPrincipal === "degustarEditarNaoEncontrada"){
           setTela(<DegustarEditarNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "degustarEditadaComSucesso"){
           setTela(<DegustarEditadoComSucesso/>)
       }else if(stateEstadoPrincipal === "degustarExcluirNaoEncontrada"){
           setTela(<DegustarExcluirNaoEncontrado/>)
       }else if(stateEstadoPrincipal === "degustarExcluirEncontrada"){
           setTela(<DegustarExcluirEncontrado/>)
       }else if(stateEstadoPrincipal === "degustarExcluidaComSucesso"){
           setTela(<DegustarExcluidoComSucesso/>)
           //--------------- AQUI ACABA O IF DO MENU DEGUSTAR ---------------
       }else if(stateEstadoPrincipal === "filtro"){
            setTela(<Filtro/>)
       }else if (stateEstadoPrincipal === "filtroRelatorio"){
            setTela(<FiltroRelatorio/>)
       }
            //--------------- AQUI ACABA O IF DO FILTRO ---------------
       else if(stateEstadoPrincipal === "voltar"){
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
            <MenuLateralDegustacao />
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
