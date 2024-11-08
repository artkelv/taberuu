import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function CargoCriadoComSucesso() {

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>Cargo criado com sucesso!</p>
      </div>
      <div>
        <button onClick={() => dispatch(alteraEstado("voltar"))}>Voltar</button>
      </div>
    </div>
  )
}
