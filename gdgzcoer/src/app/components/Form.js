

export default function Form(){
    return(
        <div>
            <div className="flex ">
                <div className="pt-10 pb-10 pl-20 bg-yellow-400 w-1/2">
                    <div className="text-xl font-bold">Connect with us</div><br/><br/>
                    <input type="text" placeholder="Name" className="border-b-[1px] border-black mr-2"/>
                    <input type = "email" placeholder="Email"className="border-b-[1px] border-black mr-2"/><br/><br/>
                    <input type="text" placeholder="Subject"className="border-b-[1px] border-black mr-2"/><br/><br/>
                    <textarea type="text" placeholder="Message" className="w-1/2 border-b-[1px] border-black mr-2"></textarea><br/><br/>
                    <button className="bg-green-700 px-6 py-1 rounded-[10px]">Send</button>
                </div>
                <div className="bg-blue-600 ">

                </div>
            </div>

        </div>
    )
}