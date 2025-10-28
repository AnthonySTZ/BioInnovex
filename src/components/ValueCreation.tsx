import glass from "../assets/images/glass.png";
import { creations } from "../data/creations";
import CreationItem from "./CreationItem";

export default function ValueCreation() {
    return (
        <div id="references" className="mx-16 space-y-8">
            <div className="bg-center bg-cover"
            style={{backgroundImage: `url(${glass})`}}>
                <div className="w-full h-full p-8 pt-24 bg-white/50 text-blue-600 flex flex-col gap-4">
                    <h1 className="text-6xl font-bold">
                        OVER 20 YEARS<br/>
                        OF VALUE CREATION
                    </h1>
                    <p className="text-4xl">references upon request</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8">
                {
                    creations.map((creation, index) => (
                        <CreationItem
                            key={index}
                            creation={creation}/>
                    ))
                }
            </div>
        </div>
    )
}