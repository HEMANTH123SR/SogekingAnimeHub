import Navigation from "../../components/Navigation";
import ShareComponent from "../../components/ShareComponent"
import {Outlet} from "react-router-dom"
const HomePage=()=>{
    return(
        <div>
           <Navigation/>
           <ShareComponent/>
           <Outlet/>
        </div>
    )
}


export default HomePage;

//import Navigation from "./components/Navigation/Navigation"
// import ShareComponent from "./components/Navigation/ShareComponent";