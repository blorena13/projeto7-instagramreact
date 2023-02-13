const pessoas = [
    {icon: "./assets/Alicent-Hightower.jpg" , nome:"Alicent.Hightower" , estado: "Segue você" },
    {icon: "./assets/Aegon-Targaryen.jpg", nome: "drunk_king" , estado: "Amigos em comum" },
    {icon: "./assets/Aemond-Targaryen.jpg" , nome: "Aemond_Targaryen" , estado: "Segue você" },
    {icon: "./assets/Criston-cole.jpg", nome: "Sor.criston_Cole" , estado:"Novo no instagram" },
    {icon: "./assets/larys-strong.jpg", nome:  "Larys_strong" , estado: "Segue você" },
    
]

export default function Sugestoes() {
    return (
        <ul className="lateral">
            {pessoas.map((p) => <Sugeridos icon={p.icon} nome={p.nome} estado={p.estado} />)}
        </ul>

    )

    
}

function Sugeridos(props){
        return (
            <li>
            <li class="pessoas-sugestoes">
            <li class="seguir">
            <img src={props.icon}/>
            <li class="seguir-nomes">
            <p> <strong> {props.nome} </strong> </p>
             <p> {props.estado} </p>
             </li> 
            </li>
            <li class="seguir-opcao"> Seguir </li>
          </li> 
          </li>
        )
    
}