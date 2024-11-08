import { alteraEstado } from "@/pages/redux/estadoPrincipal/estadoPrincipalSlice";
import { useDispatch } from "react-redux";

export default function CargoEditarEncontrado() {

  const dispatch = useDispatch();

  return (
    <div>
        <div>
          <div>
            <label htmlFor="">Cargo encontrado!</label>
          </div>
          <div>

            
          <div>
                <div>
                    <div>
                        <p>Cargo encontrado! Edite-o usando os campos abaixo.</p>
                    </div>
                    <form>
                        <div>
                            <label>Nome do cargo</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Descrição do cargo</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <h3>ID da vaga</h3>
                            <p>O ID da vaga continuará o mesmo!</p>
                        </div>

                        <button>Editar cargo</button>
                    </form>
                </div>
            </div>


            <button>Editar cargo</button>
          </div>
        </div>
    </div>
  )
}
