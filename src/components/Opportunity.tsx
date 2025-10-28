import building from "../assets/images/building.jpeg";
import { models } from "../data/models";
import ModelItem from "./ModelItem";
import Timeline from "./Timeline";

export default function Opportunity() {
    return (
        <div className="mx-16 flex justify-between gap-16">
            <div className="flex flex-col gap-8">
                <h1 className="text-6xl font-bold text-blue-600">FROM OPPORTUNITY TO REVENUE</h1>
                <p className="text-blue-600 text-3xl font-semibold">
                    Our approach ensures a seamless transition from strategy to
                    execution, delivering measurable results on the ground.
                </p>
                <Timeline />
            </div>



            {/* IMAGE */}
            <div className="pt-40 bg-cover bg-center"
            style={{backgroundImage: `url(${building})`}}>

                <div className="flex flex-col bg-white/70 p-8 px-32 gap-4 justify-center">
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