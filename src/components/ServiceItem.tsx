import arrow from "../assets/images/arrow.png";
import type Service from "../types/Services";

type ServiceItemProps = {
    service: Service;
}

export default function ServiceItem({service}: ServiceItemProps) {
    return (
        <div className="flex gap-8 text-blue-600">
            <img src={arrow} className="h-12 w-12"/>
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                <p className="text-xl md:text-2xl">{service.text}</p>
            </div>
        </div>
    )
}