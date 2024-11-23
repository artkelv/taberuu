import styles from "@/styles/cadastro.module.css";

export default function Cadastro() {
  return (
    <div id={styles.container}>
      <div id={styles.primeiroContainer}>
        <div>
          <h1 id={styles.tituloCadastro}>Cadastro</h1>
          <p id={styles.descricaoEfetuarLogin}>Efetuar o login abaixo.</p>
        </div>
        <div>
          <div className={styles.caixaDasEntradas}>
            <input className={styles.entradas} type="email" placeholder="Email" />
            <select name="" className={styles.entradas}>
              <option value="">Escolha o cargo</option>
              <option value="">Administrador</option>
              <option value="">Cozinheiro</option>
              <option value="">Degustador</option>
              <option value="">Editor</option>
            </select>
          </div>
          <div className={styles.caixaDasEntradas}>
            <input className={styles.entradas} type="text" placeholder="Nome Completo" />
            <input className={styles.entradas} type="text" placeholder="Data de nascimento" />
          </div>
          <div className={styles.caixaDasEntradas}>
            <input className={styles.entradas} type="text" placeholder="Numero de telefone" />
            <input className={styles.entradas} type="text" placeholder="CPF" />
          </div>
        </div>
        <div>
          <p id={styles.descricaoFotoPerfil}>Foto de perfil</p>
          <input type="file" name="" id={styles.entradaFile} />
          <div id={styles.caixaLembrar}>
            <input type="checkbox" name="" id={styles.entradaChecked} />
            <span id={styles.lembrarAqui}>Lembrar neste dispositivo</span>
          </div>
        </div>
        <div>
          <button id={styles.btnCadastrar}>Cadastrar</button>
        </div>
      </div>
      <div id={styles.segundoContainer}>
        <div id={styles.fundoPreto}>
          <h2 id={styles.taberu}>TABERU</h2>
          <h2 id={styles.food}>FOOD.</h2>
          <p id={styles.descricaoTaberu}>Utilize nosso Dashboard para criar, editar ou deletar.</p>
        </div>
      </div>
    </div>
  )
}
