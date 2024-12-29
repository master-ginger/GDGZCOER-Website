import Footer from "./Footer";
import Form from "./Form";
import HeroAbout from "./HeroAbout";
import Navbar from "./Navbar";
import Vision from "./VisionCards";
export default function Homepage(){
    return(
        <div>
            <Navbar/>
            <HeroAbout/>
            
            <Vision/>
            <Form/>
            <Footer/>
        </div>
    )
}