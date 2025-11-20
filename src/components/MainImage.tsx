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
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-30" style={{ opacity }}>
                <h1 className="relative text-5xl lg:text-6xl font-semibold text-center leading-tight text-blue-700">
                    YOU’VE BUILT VALUE<br/>
                    WE HELP YOU UNLOCK<br/>
                    ITS <span className="text-[rgb(60,199,111)] font-bold">FULL POTENTIAL</span>
                </h1>
            </div>
        </div>
    )
}