type TimelineItemProps = {
    text: string;
    isFirst: boolean;
    isLast: boolean;
}

export default function TimelineItem({text, isFirst, isLast} : TimelineItemProps) {
    return (
        <div className={isLast ? "bg-linear-to-r from-[rgb(171,237,190)] from-49% to-51%" : "bg-[rgb(171,237,190)]"}>
            <div className="flex h-full py-8 px-16 bg-[rgb(120,212,146)] justify-center items-center"
            style={{
                clipPath: `${isFirst ? "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)" : "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%, 15% 50%)" }`
            }}>
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}