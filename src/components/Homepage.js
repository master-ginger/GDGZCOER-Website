import Footer from "./Footer";
import Form from "./Form";
import HeroAbout from "./HeroAbout";
import Landingpage from "./Landingpage";
import Navbar from "./Navbar";
import Vision from "./VisionCards";
export default function Homepage(){
    return(
        <div>
            <Landingpage/>
            <HeroAbout/>
            
            <Vision/>
            <Form/>
        </div>
    )
}