export default function Stories() {
    
    const storys = [
        {imagem: "./assets/Baela-targaryen.jpg", nome:"Baela-Targ"},
        {imagem: "./assets/Corlys-Velaryon.jpg", nome:"Corlys_Vel"},
        {imagem: "./assets/Daemon-Targaryen.jpg", nome:"Daemon_T"},
        {imagem: "./assets/Laenor-Velaryon.jpg", nome:"Laenor_Vel"},
        {imagem: "./assets/Viserys-targaryen.jpg", nome:"Visery.s"},
        {imagem: "./assets/rhaena-targaryen.jpg", nome:"Rhaen_a"},
        {imagem: "./assets/rhaenys.jpg", nome:"rhae_nys"},
        {imagem: "./assets/Harwin-strong.jpg", nome:"_strong"},

    ]
    
    return (
        <ul class="fundo">
            
                {storys.map((s) => <Story imagem={s.imagem} nome={s.nome}/>)}
            

        </ul>
    )
}

function Story(props){
    return (
        <li class="icon-storie">
            <img src={props.imagem} />
            <p>{props.nome}</p>
        </li>
    )
}