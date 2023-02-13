import Usuario from "./Usuario";
import Sugestoes from "./Sugestoes";



export default function SideBar() {
    return (
        <li class="sideBar">
            <li className="usuario">
            <Usuario/>
            </li>
            <li class="sugestoes"> 
              <p> Sugestões para você </p>
              <p> <strong> Ver tudo </strong> </p>
              </li>
            <Sugestoes />
            

        </li>
    )

}