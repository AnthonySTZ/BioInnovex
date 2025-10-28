import type Creation from "../types/Creation";
import molecule from "../assets/images/molecule.jpeg";

type CreationItemProps = {
    creation: Creation;
}

export default function CreationItem({creation} : CreationItemProps) {
    return (
        <div className="flex flex-col bg-center bg-cover text-white gap-8"
        style={{backgroundImage: `url(${molecule})`}}>
            <div className="bg-blue-600/70 space-y-2 px-8 text-center">
                <h2 className="text-2xl font-semibold">{creation.title}</h2>
                <div className="mx-16 border-y h-1 border-white"></div>
                <p className="text-xl font-semibold">{creation.subtitle}</p>
            </div>
            <div className="flex flex-col h-full">
                <p className="text-xl font-semibold bg-blue-600/70 px-8 py-2">{creation.description}</p>
                <p className="bg-white/80 text-blue-600 text-2xl font-bold px-8 py-2 h-full">
                    {creation.text}
                </p>
            </div>
        </div>
    )
}