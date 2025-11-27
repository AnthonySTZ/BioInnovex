import building from "../assets/images/building.jpeg";
import { models } from "../data/models";
import ModelItem from "./ModelItem";
import Timeline from "./Timeline";

export default function Opportunity() {
    return (
        <div className="mx-4 lg:mx-8 flex flex-col xl:flex-row justify-between gap-4 lg:gap-16">
            <div className="flex flex-col gap-8 md:gap-16">
                <h1 className="text-4xl lg:text-6xl font-bold text-blue-600">FROM OPPORTUNITY TO REVENUE</h1>
                <p className="text-blue-600 text-2xl md:text-3xl">
                    Our approach ensures a seamless transition from strategy to
                    execution, delivering measurable results on the ground.
                </p>
                <div className="hidden lg:block">
                <Timeline />
                </div>
            </div>



            {/* IMAGE */}
            <div className="bg-cover bg-center hidden xl:flex"
            style={{backgroundImage: `url(${building})`}}>

                <div className="flex flex-col w-full bg-white/70 p-8 px-16 gap-8 justify-center">
                    <h2 className="text-6xl font-semibold text-blue-600 mb-4 text-center whitespace-nowrap">OUR MODEL IS:</h2>
                    {
                        models.map((model, index) => (
                            <ModelItem 
                            key={index}
                            model={model} />
                        ))
                    }
                </div>
            </div>

            <div className="flex xl:hidden flex-col gap-8 justify-center my-8">
                <h2 className="text-4xl font-semibold text-blue-600 text-cente whitespace-nowrap">OUR MODEL IS:</h2>
                {
                    models.map((model, index) => (
                        <ModelItem 
                        key={index}
                        model={model} />
                    ))
                }
            </div>
        </div>
    )
}