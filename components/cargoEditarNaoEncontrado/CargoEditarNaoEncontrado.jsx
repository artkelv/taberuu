import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function CargoEditarNaoEncontrado() {

  const dispatch = useDispatch();

  return (
    <div>
        <div>
            <p>Não encontrado! O cargo que voce esta querendo editar não foi encontrado. Busque o cargo novamente abaixo.</p>
        </div>
        <form action="">
            <div>
                <label htmlFor="">Nome do cargo</label>
                <input type="text" placeholder='Insira o nome do cargo'/>
            </div>
            <button>Buscar cargo</button>
        </form>
      <button onClick={() => dispatch(alteraEstado("voltar"))}>Voltar</button>
    </div>
  )
}
