type ContactImageProps = {
    image: string;
}

export default function ContactImage({image} : ContactImageProps) {
    return (
        <div className="bg-[rgb(107,215,147)] p-3 w-xs"
        style={{
                clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%)"
            }}
        >
            <img src={image}
            style={{
                clipPath: "polygon(0 0, 59% 0, 99% 50%, 59% 100%, 0 100%)"
            }}/>
        </div>
    )
}