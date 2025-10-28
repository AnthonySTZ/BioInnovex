type ArrowProps = {
    height: number,
    width: number,
    arrowSize: number,
}

export default function Arrow({height, width, arrowSize} : ArrowProps) {
    return (
        <div className={`
        flex flex-col items-center
        h-${height}
        `}>
            <div className={`
            bg-blue-800
            w-${arrowSize} h-${arrowSize}
            `}
            style={{
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)"
            }}/>
            
            <div className={`
            h-full bg-blue-800
            w-${width}
            `}/>
        </div>
    )
}