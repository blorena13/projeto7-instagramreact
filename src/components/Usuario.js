import { useState } from "react"; 

export default function Usuario() {

    const fotoInicial = "./assets/rhaenyra.jpg"
    const usuario = "Rhaenyra Targaryen"
    const [nomeDoUsuario, setNomeDoUsuario] = useState(usuario)
    const [icon, setIcon] = useState(fotoInicial)

    function apertarBotao(){
        const novoUsuario = prompt("Escolha um nome de usuário")

        if (novoUsuario !== ""){
        setNomeDoUsuario(novoUsuario)}
    }

    function trocarIcon(){
        const novoIcon = prompt("Insira o link do seu novo icon")

        if (novoIcon !== ""){
        setIcon(novoIcon)}
    }

    return (
        <li class="perfil-principal">
          <img data-test="profile-image" onClick={trocarIcon} src={icon} />
          <li class="nome-perfil">
           <p> <span data-test="name"><strong> {nomeDoUsuario} </strong> </span> </p> <img data-test="edit-name" onClick={apertarBotao} src="./assets/Edit_fill.png"/> 
          </li>
        </li>
    )
}