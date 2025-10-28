type ArrowProps = {
    height: string,
    width: string,
    arrowSize: string,
}

export default function Arrow({height, width, arrowSize} : ArrowProps) {
    return (
        <div className="flex flex-col items-center"
        style={{ minHeight: `${height}rem` }}>
            <div className="bg-blue-800"
            style={{
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                minHeight: `${arrowSize}rem`,
                minWidth: `${arrowSize}rem`
            }}/>
            
            <div className="h-full bg-blue-800"
            style={{
                minWidth: `${width}rem`
            }}/>
        </div>
    )
}