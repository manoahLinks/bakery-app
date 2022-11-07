import { useState } from "react";
import Modal from "./Modal";

const Sidebar = () => {

    const [open, setOpen] = useState(true)
    const [modalOn, setModalOn] = useState(false)
    const [choice, setChoice] = useState(true)

    const clicked = () => {
        setModalOn(true)
    }

    const menus = [
        {id:1, title:"Dashboard", src:"dashboard"},
        {id:2, title:"Account", src:"user"},
        {id:3, title:"My Tasks", src:"calendar"},
        {id:4, title:"Analytics", src:"analytics"},
        {id:5, title:"Setting", src:"setting"}
    ]

    return ( 

        <div className={`${open ? "w-60" : "w-20" } pt-8 h-screen fixed bg-zinc-300 duration-300 hidden relative md:block`}>
                <span className={`absolute cursor-pointer p-3 rounded-full bg-black top-9 rounded-full -right-5 text-gray-100 text-semibold hover:bg-gray-900`}
                      onClick={()=>{setOpen(!open)}}  
                    >
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6  ${!open && "rotate-180"}`}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </span>
                
                <div className="flex gap-x-4 items-center">
                    <img src={require(`../assets/dashboard-apps.png`)} className={`cursor-pointer duration-300`} />
                    <h1 className={`text-gray-700 origin-left font-medium text-xl duration-300 text-bold ${!open && "scale-0"}`}>BakeryName</h1>
                </div>
                {<ul className="pt-4">
                    {menus.map((menu)=>(
                        <li key={menu.id} onClick={clicked} className={`text-gray-700 text-md flex items-center gap-x-4 cursor-pointer  px-12 py-2 m-2 rounded-full hover:shadow-md hover:bg-white`}>
                            {<img className="w-6" src={require(`../assets/${menu.src}.png`)} alt="" />}
                            <span className={`${!open && "hidden"} origin-left duration-200 text-gray-500`}>{menu.title}</span>   
                        </li>
                    ))}
                </ul>}
                {modalOn && <Modal setModalOn = {setModalOn} />}
            </div>

     );
}
 
export default Sidebar;