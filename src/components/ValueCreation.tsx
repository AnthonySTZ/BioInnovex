import { useRef } from "react";
import glass from "../assets/images/glass.png";
import { creations } from "../data/creations";
import CreationItem from "./CreationItem";
import whiteArrow from "../assets/images/white_arrow.png"

export default function ValueCreation() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (scrollRef.current && scrollRef.current.firstChild instanceof HTMLElement) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap (gap-6 = 1.5rem = 24px)
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
    };

    const scrollPrev = () => {
        if (scrollRef.current && scrollRef.current.firstChild instanceof HTMLElement) {
        const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        }
    };

    return (
        <div id="references" className="mx-4 lg:mx-8 space-y-8">
            <div className="bg-center bg-cover"
            style={{backgroundImage: `url(${glass})`}}>
                <div className="w-full h-full p-8 lg:pt-24 bg-white/50 text-blue-600 flex flex-col gap-4">
                    <h1 className="text-4xl lg:text-5xl font-bold">
                        OVER 20 YEARS<br/>
                        OF VALUE CREATION
                    </h1>
                    <p className="text-4xl">references upon request</p>
                </div>
            </div>
            <div className="relative w-full">
                {/* Scroll buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-0 z-20 h-full p-2"
                >
                    <img src={whiteArrow} alt="icon" className="h-8 w-8 rotate-180 opacity-70" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-0 z-20 h-full p-2"
                >
                    <img src={whiteArrow} alt="icon" className="h-8 w-8 opacity-70" />
                </button>

                {/* Scrollable container */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                >
                    <div className="flex gap-6">
                    {creations.map((creation, index) => (
                        <div key={index} className="snap-start">
                        <CreationItem creation={creation} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}