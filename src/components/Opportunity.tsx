import building from "../assets/images/building.jpeg";
import { models } from "../data/models";
import ModelItem from "./ModelItem";

export default function Opportunity() {
    return (
        <div className="mx-16 flex justify-between">
            <div className="flex flex-col">
                <h1 className="text-6xl font-semibold text-blue-600">FROM OPPORTUNITY TO REVENUE</h1>
            </div>
            <div className="pt-40 bg-cover bg-center"
            style={{backgroundImage: `url(${building})`}}>

                <div className="flex flex-col bg-white/70 p-8 gap-4 justify-center">
                    <h2 className="text-6xl font-semibold text-blue-600 mb-8 text-center">OUR MODEL IS:</h2>
                    {
                        models.map((model, index) => (
                            <ModelItem 
                            key={index}
                            model={model} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}