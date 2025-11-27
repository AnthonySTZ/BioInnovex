import microscope from "../assets/images/microscope.jpeg";
import { services } from "../data/services";
import ServiceItem from "./ServiceItem";

export default function OurServices() {
    return (
        <div id="our-services" className="mx-4 lg:mx-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-600">OUR SERVICES:</h1>
            <div className="flex flex-col py-8 lg:p-8 2xl:grid 2xl:grid-cols-3 gap-8">
                <div className="col-start-3 row-span-3 bg-center bg-cover hidden 2xl:block"
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