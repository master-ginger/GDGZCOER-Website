import gdgLogo from "../../../public/gdgLogo.png"
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer(){
    return(
        <div className="p-5">
            <div className="flex ">
                <Image src={gdgLogo} className="h-[60px] w-[120px]" alt="GDG Logo"/>
                <div className="ml-5 mt-2">
                    <div className="font-bold">Google Developer Groups</div>
                    <div>On Campus, ZCOER</div>
                    
                </div>
                <div className="flex justify-end w-3/4">
                    <div className="flex mt-5">
                        <div ><FaInstagram className="w-[30px] h-[30px] mr-2"/></div>
                        <div><FaTwitter className="w-[30px] h-[30px] mr-2"/></div>
                        <div><FaLinkedin className="w-[30px] h-[30px] mr-2"/></div>
                    </div>  
                </div>
            </div>
        </div>
    )
}