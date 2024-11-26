import styles from "@/styles/cadastro.module.css";

import { useDispatch, useSelector } from "react-redux";

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
            <input className={styles.entradas} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <select name="" className={styles.entradas} onChange={(e) => setCargo(e.target.value)}>
              <option value="">Escolha o cargo</option>
              <option value="">Administrador</option>
              <option value="">Cozinheiro</option>
              <option value="">Degustador</option>
              <option value="">Editor</option>
            </select>
          </div>
          <div className={styles.caixaDasEntradas}>
            <input className={styles.entradas} type="text" placeholder="Nome Completo" onChange={(e) => setNomeCompleto(e.target.value)}/>
            <input className={styles.entradas} type="text" placeholder="Data de nascimento" onChange={(e) => setDataNascimento(e.target.value)}/>
          </div>
          <div className={styles.caixaDasEntradas}>
            <input className={styles.entradas} type="text" placeholder="Numero de telefone" onChange={(e) => setTelefone(e.target.value)}/>
            <input className={styles.entradas} type="text" placeholder="CPF" onChange={(e) => setCPF(e.target.value)}/>
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
