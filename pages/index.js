import sytles from "@/styles/index.module.css";

export default function Index() {

  function pegaUsuarioLogado(){
    axios.post('http://localhost:3003/login/{usuario}')

    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

  return (
      <div id={sytles.boxLogin}>
        <div id={sytles.boxEsquerdo}>
          <div id={sytles.caixapreta}>
            <div id={sytles.subcaixapreta}>
              <h1 id={sytles.tituloTbaeru}>TABERU</h1>
              <h2 id={sytles.tituloFood}>FOOD</h2>
              <p id={sytles.tetxotitulo}>
                Utilize nosso Dashboard para criar, editar ou deletar.
              </p>
            </div>
          </div>
        </div>
        <div id={sytles.boxDireito}>
          <h1 id={sytles.tituloLogin}>Efetuar login</h1>
          <p id={sytles.textoTitulo}>Efetue o login abaixo</p>
          <input
            className={sytles.caixasdeLoins}
            type="text"
            placeholder="Senha"
          />
          <input
            className={sytles.caixasdeLoins}
            type="text"
            placeholder="Email"
          />
          <label className={sytles.checkboxLabel}>
            <input type="checkbox" />
            <span className={sytles.checkboxText}>Lembrar neste dispositivo</span>
          </label>
          <button id={sytles.btnLogin}>Efetuar login</button>
        </div>
      </div>
  );
}
