import { IoCall,IoMail,IoLocationSharp } from "react-icons/io5";

export default function Form(){
    return(
        <div>
            <div className="flex ">
                <div className="pt-10 pb-10 pl-20 bg-yellow-400 w-1/2">
                    <div className="text-xl font-bold">Connect with us</div><br/><br/>
                    <input type="text" placeholder="Name" className="border-b-[1px] border-black mr-2 p-1"/>
                    <input type = "email" placeholder="Email"className="border-b-[1px] border-black mr-2 p-1"/><br/><br/>
                    <input type="text" placeholder="Subject"className="border-b-[1px] border-black mr-2 p-1"/><br/><br/>
                    <textarea type="text" placeholder="Message" className="w-1/2 border-b-[1px] border-black mr-2 p-1"></textarea><br/><br/>
                    <button className="bg-green-700 px-6 py-1 rounded-[10px]">Send</button>
                </div>
                <div className="bg-blue-600 w-1/2 pt-10 pb-10 pr-20">
                    <div className="text-xl font-bold pl-20">Contact Us</div><br/><br/>
                    <div className="">
                            <div className="flex justify-end"><IoCall className="h-[20px] w-[20px] mr-2"/> +917750626341</div><br/>
                            <div className="flex justify-end"><IoMail className="h-[20px] w-[20px] mr-2"/>gdgoczcoer@gmail.com</div><br/>
                            <div className="flex justify-end"><IoLocationSharp className="h-[20px] w-[20px] mr-2"/>Zeal College of Engineering and Research, Narhe, Pune</div><br/>
                    </div>
                </div>
            </div>

        </div>
    )
}