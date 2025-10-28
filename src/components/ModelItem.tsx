import arrow from "../assets/images/arrow.png";
import type Model from "../types/Model";

type ModelItemProps = {
    model: Model;
}

export default function ModelItem({model}: ModelItemProps) {
    return (
        <div className="flex gap-4 text-blue-600 items-center">
            <img src={arrow} className="h-16 w-16"/>
            <div className="">
                <h2 className="text-6xl font-extrabold">{model.title}</h2>
                <p className="text-3xl">{model.text}</p>
            </div>
        </div>
    )
}