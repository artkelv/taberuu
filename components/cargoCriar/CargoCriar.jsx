import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

import styles from "./cargoCriar.module.css";

export default function CargoCriar() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          <p>Voce está CRIANDO uma Cargo!</p>
        </div>
        <form>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <h2>ID do cargo</h2>
            <p>O ID do cargo será gerado automaticamente!</p>
          </div>
        </form>
      </div>
      <button onClick={() => dispatch(alteraEstado("voltar"))}>Voltar</button>
    </div>
  )
}
