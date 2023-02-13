export default function NavBar() {
    
    return (
        <div class="topo">
        <div class="topo-base">
            <div class="logo-principal">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="linha"></div>
        <img class="instagram-nome" src="./assets/logo.png" />
            </div>

            <div class="barra-de-pesquisa"> 
          <input type="text" placeholder="Pesquisar" />
      </div>

      <div class="icon">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>

        </div>
        </div>
    )
}