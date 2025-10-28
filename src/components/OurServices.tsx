import microscope from "../assets/images/microscope.jpeg";
import { services } from "../data/services";
import ServiceItem from "./ServiceItem";

export default function OurServices() {
    return (
        <div className="mx-16">
            <h1 className="text-6xl font-bold text-blue-600">OUR SERVICES:</h1>
            <div className="p-8 grid grid-cols-3 gap-8">
                <div className="col-start-3 row-span-3 bg-center bg-cover"
                style={{ backgroundImage: `url(${microscope})`}}></div>
                {
                   services.map((service, index) => (
                    <ServiceItem
                    key={index}
                    service={service} />                    
                )) 
                }
            </div>
        </div>
    )
}