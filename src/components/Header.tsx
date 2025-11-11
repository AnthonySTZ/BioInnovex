import { useState } from "react"
import logo from "../assets/images/logoBioInnovex.png"
import menu_img from "../assets/images/menu.png";

export default function Header() {

    const [menu, setMenu] = useState(false);

    return (
        <div className="flex justify-between items-center p-6 bg-white shadow">
            <a href="/"><img src={logo} className="h-8 w-auto"/></a>
            <div className="text-lg flex justify-evenly items-center text-nowrap gap-8 text-blue-500 font-semibold w-0 invisible md:visible md:w-auto">
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
                    <div className="absolute right-0 mt-2 z-10 bg-white rounded-lg shadow-lg">
                        <ul className="p-2 px-4 space-y-2 text-nowrap text-blue-500 font-semibold">
                            <li><a href="#about-us">About us</a></li>
                            <li><a href="#our-services">Our services</a></li>
                            <li><a href="#references">References</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                }                
            </div>
        </div>
    )
}