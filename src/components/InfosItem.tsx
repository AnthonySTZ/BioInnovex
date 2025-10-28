import Arrow from "./Arrow";

type InfosItemProps = {
    infos: Array<string>;
}

export default function InfosItem({infos} : InfosItemProps) {
    return (
        <div className="flex flex-col text-blue-700 text-xl items-center pt-4 gap-4 p-2">
            <Arrow
                height={"4"}
                width={"0.5"}
                arrowSize={"4"}
                />
            <div className="flex flex-col justify-evenly bg-[rgb(215,223,255)] p-4 gap-2 h-full w-full">
                {
                    infos.map((text, index) => (
                        <div key={index} className="flex gap-8">
                            <p>•</p>
                            <p>{text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}