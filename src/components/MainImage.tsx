import { useEffect, useState } from "react";
import purpleStrings from "../assets/images/purple_strings.png"

export default function MainImage() {

    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
        const fadePoint = 600;
        const newOpacity = Math.max(1 - window.scrollY / fadePoint, 0);
        setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bg-cover bg-center w-full h-screen">
            <div className="transition-all duration-150 ease-in-out hidden md:flex bg-cover bg-center py-8 md:py-16 md:mt-24 mx-4 lg:mx-8"
            style= { { backgroundImage: `url(${purpleStrings})` } }>
                <div className="bg-blue-600/80 p-12 py-8 lg:py-24 rounded-r-lg">
                    <h1 className="text-3xl lg:text-5xl text-white font-semibold leading-tight">
                        YOU’VE BUILT VALUE<br/>
                        WE HELP YOU UNLOCK<br/>
                        ITS FULL POTENTIAL
                    </h1>
                </div>
            </div>
            <div className="fixed inset-0 flex md:hidden items-center justify-center pointer-events-none z-30" style={{ opacity }}>
                <h1 className="relative text-5xl font-bold text-center leading-tight text-blue-700">
                    YOU’VE BUILT VALUE<br/>
                    WE HELP YOU UNLOCK<br/>
                    ITS FULL POTENTIAL
                </h1>
            </div>
        </div>
    )
}