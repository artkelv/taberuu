import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function CargoEditar() {
  const dispatch = useDispatch();

  return (
    <div>
        <div>
            <p>Voce está EDITANDO um cargo!</p>
        </div> 
        <div>
            <div>
                <p>ATENÇÃO: Para editarmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="">Nome do cargo</label>
                        <input type="text" />
                    </div>

                    <button onClick={() => respostaPesquisaCargo()}>Buscar cargo</button>
                </form>
            </div>
        </div>
        <div>
            <button onClick={() => dispatch(alteraEstado("voltar"))}>Voltar</button>
        </div>
    </div>
  )
}
