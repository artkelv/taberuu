
export default function CargoExcluirNaoEncontrado() {
  return (
    <div>
        <div>
            <p>Voce está EXCLUINDO um cargo!</p>
        </div>
        <div>
            <p>Cargo NÃO encontrado!</p>
            <p>Busque novamente usando o campo abaixo.</p>
        </div>
        <div>
            <label htmlFor="">Nome do cargo</label>
            <div>
                <input type="text" />
                <button>Procurar cargo</button>
            </div>
        </div>
    </div>
  )
}
