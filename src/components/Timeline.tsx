import { timeline } from "../data/timeline"
import TimelineItem from "./TimelineItem"

export default function Timeline() {
    return (
        <div className="grid grid-cols-3 text-white text-3xl">
            {
                timeline.map((text, index) => (
                    <TimelineItem
                    text={text}
                    isFirst={index == 0}
                    isLast={index == timeline.length - 1} />
                ))
            }
        </div>
    )
}