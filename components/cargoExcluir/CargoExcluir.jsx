import React from 'react'

export default function CargoExcluir() {
  return (
    <div>
        <div>
            <p>Voce está EXCLUINDO um cargo!</p>
        </div>
        <div>
            <p>ATENÇÃO: Para excluirmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
        </div>
        <div>
            <label htmlFor="">Nome do cargo</label>
            <input type="text" />
        </div>
        <div>
            <button>Procurar cargo</button>
        </div>
    </div>
  )
}
