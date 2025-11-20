import { useState } from "react"
import logo from "../assets/images/logoBioInnovex.png"
import menu_img from "../assets/images/menu.png";

export default function Header() {

    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-between items-center p-6 bg-white shadow">
            <a href="/"><img src={logo} className="h-8 w-auto"/></a>
            <div className="hidden md:flex text-lg justify-evenly items-center text-nowrap gap-8 text-blue-500 font-semibold md:w-auto">
                <a href="#about-us">About us</a>
                <a href="#our-services">Our services</a>
                <a href="#references">References</a>
                <a href="#contacts">Contacts</a>
            </div>
            <div className="relative inline-block md:hidden">
                <button
                    type="button"
                    onClick={() => setMenu(!menu)} 
                    className="hover:cursor-pointer"><img className="h-8 w-auto" src={menu_img}/></button>
                {menu && 
                    <div className="absolute right-0 mt-2 z-10 bg-white rounded-md shadow-xl border border-gray-300">
                        <ul className="py-2 text-xl space-y-2 text-nowrap text-blue-500 font-semibold">
                            <li className="px-4"><a href="#about-us">About us</a></li>
                            <hr></hr>
                            <li className="px-4"><a href="#our-services">Our services</a></li>
                            <hr></hr>
                            <li className="px-4"><a href="#references">References</a></li>
                            <hr></hr>
                            <li className="px-4"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                }                
            </div>
        </div>
    )
}