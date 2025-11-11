import microscope from "../assets/images/microscope.jpeg";
import { services } from "../data/services";
import ServiceItem from "./ServiceItem";

export default function OurServices() {
    return (
        <div id="our-services" className="mx-4 lg:mx-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-blue-600">OUR SERVICES:</h1>
            <div className="flex flex-col p-8 lg:grid lg:grid-cols-3 gap-8">
                <div className="col-start-3 row-span-3 bg-center bg-cover hidden lg:block"
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