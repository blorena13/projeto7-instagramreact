import SideBar from "./SideBar";
import Stories from "./Stories";
import Posts from "./Posts";


export default function Corpo() {
    return (
        <div class="container-principal">
            <div class="feed">
            <div class="stories">
                <Stories />
                </div>
            
            <Posts />
            </div>
            
            <SideBar/>
            

           </div> 
    )
}