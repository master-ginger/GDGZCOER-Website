import Image from "next/image";
import gdglogo from "../../../public/gdglogo.png"
import wavybg from "../../../public/wavybg.png"


export default function Landingpage(){
    return(
        <div>

            <div className="relative h-auto w-full top-0">
                <Image 
                        className="absolute z-0 w-full top-[0]"
                        src={wavybg} 
                        alt="background-image">
                </Image>
                
                <div className="absolute text-center w-full z-[1] top-60 bg-transparent">
                    <Image
                        className="w-[14rem] m-auto"
                        src={gdglogo} 
                        alt="GDG-Logo">
                    </Image>
                </div>

                <div className="absolute text-center z-[2] w-full m-auto top-[23rem] bg-transparent">
                    <h1 className="font-semibold text-[50px] p-[5px] bg-transparent">Google Developer Groups On Campus</h1>
                    <h2 className="font-medium m-[3px] p-[5px] bg-transparent">ZCOER, Pune</h2>
                </div>
            </div>
            
        </div>
    )
}