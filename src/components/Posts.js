import { useState } from "react"

const post = [
  { 
  icon: "./assets/Daemon-Targaryen2.jpg", 
  usuario: "Daemon Targaryen", 
  imagem: "./assets/rhaenyra-daemon2.jpg", 
  pessoa:"./assets/rhaenys2.jpg" , 
  curtida: "rhae_nys", 
  numero: 1004847 },

  { 
  icon:"./assets/rhaenyra2.jpg", 
  usuario: "Rhaenyra Targaryen", 
  imagem: "./assets/strong-rhaenyra.jpg", 
  pessoa: "./assets/jace-targaryen.jpg", 
  curtida: "Jace_velar", 
  numero: 999079543 },

  { 
  icon:"./assets/jace-targaryen2.jpg", 
  usuario: "Jacaerys Velaryon", 
  imagem:"./assets/family-targaryen2.jpg", 
  pessoa: "./assets/Laenor-Velaryon.jpg", 
  curtida: "laenor_Vel", 
  numero: 659072741 },
]

export default function Posts() {
  


  return (
    <ul className="post">
      {post.map((p) => <Postagem icon={p.icon} usuario={p.usuario} imagem={p.imagem} pessoa={p.pessoa} curtida={p.curtida} numero={p.numero} />)}
    </ul>
  )
}




function Postagem(props) {
  const [coracao, setCoracao] = useState();
  const [salvo , setSalvo] = useState();
  const [likes, setLikes] = useState(props.numero);

  
  return (
  <li data-test="post" class="posts">
    <li class="barra-perfil">
      <li class="perfil-post">
        <img src={props.icon} />
        <p> <strong> {props.usuario} </strong> </p>
      </li> 

      <li class="pontinhos">
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </li> 
    </li> 
  
    <img data-test="post-image"
      class="postagens-imagem"
    src={props.imagem} onClick={() => {setCoracao(!coracao);
    }}
    />
    <li class="barra-reacao">
      <li class="like-coments">
        {
        coracao ? <ion-icon data-test="like-post" style={{color:'#FF0000'}} name="heart" 
        onClick={() => {
          setLikes(likes - 1);
          setCoracao(!coracao);
        }} /> 
        : 
        <ion-icon data-test="like-post" name="heart-outline" 
        onClick={() => {
          setLikes(likes + 1); 
          setCoracao(!coracao);
        }}/>
        }
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </li>

      <li class="destaque">
        {
      salvo ?  <ion-icon data-test="save-post" onClick={() => setSalvo(!salvo)} name="bookmark"></ion-icon> : <ion-icon data-test="save-post" onClick={() => setSalvo(!salvo)} name="bookmark-outline"></ion-icon>
         }
      </li>
    </li> 

    <li class="comentarios">
      <img src= {props.pessoa} />
      <li  class="texto">
        <p> Curtido por <strong> {props.curtida} </strong> e <strong> outras <span data-test="likes-number">{likes} </span> pessoas </strong> </p>
      </li>
    </li> 


  </li> 
  )

  
  
}







